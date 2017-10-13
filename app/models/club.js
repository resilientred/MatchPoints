import URLSafeBase64 from "urlsafe-base64";
import ClubValidation from "../validations/club";
import crypto from "crypto";
import shortid from "shortid";
import bcrypt from "bcrypt-as-promised";
import mysql from "mysql";
  // id              MEDIUMINT    NOT NULL AUTOINCREMENT
  // password_digest VARCHAR(50)  NOT NULL
  // session_token   VARCHAR(32)  NOT NULL
  // short_id        CHAR(10)     NOT NULL
  // username        VARCHAR(40)  NOT NULL
  // club_name       VARCHAR(80)  NOT NULL
  // email           VARCHAR(255) NOT NULL
  // verified        TINYINT(1)   DEFAULT 0
  // token           VARCHAR(50)  NOT NULL
  // confirm_token   VARCHAR(50)  NOT NULL
  // updated_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMSTAMP
  // created_on      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP

class ClubModel {
  static generateToken() {
    return URLSafeBase64.encode(crypto.randomBytes(32));
  }

  static isPassword(password, passwordDigest) {
    return bcrypt.compare(password, passwordDigest);
  }

  static generatePasswordDigest(password) {
    return bcrypt.hash(password, 10);
  }

  constructor(connection) {
    this.connection = connection;
  }

  formatClubRow(row) {
    const fields = [
      'id', 'password_digest', 'session_token',
      'short_id', 'username', 'club_name',
      'email', 'verified', 'token',
      'confirm_token', 'updated_at', 'created_on'
    ];
    const club = {};
    fields.forEach(field => {
      if (row[field]) {
        club[field] = row[field];
      }
    });

    return club;
  }

  find(id) {
    return new Promise((resolve, reject) => {
      this.connection.query(`
        SELECT id, short_id, username, club_name, email, verified
        FROM clubs WHERE id = ?
      `, [id], (err, results, field) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  }

  all() {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT
       SELECT id, short_id, username, club_name, email
       FROM clubs`, (err, results, field) => {
        if (err) throw(err);

        return resolve(results);
      });
    });
  }

  resetPasswordWithToken(token, newPassword) {
    return this.generatePasswordDigest(newPassword)
      .then((digest) => {
        return this.findOneAndUpdate(
          { token: token },
          { $set: { passwordDigest: digest, token: undefined } }
        );
      });
  }

  confirm(token) {
    return new Promise((resolve, reject) => {
      this.connection.query(`
        UPDATE clubs
        SET confirmed = 1, confirm_token = ""
        WHERE confirm_token = ?
      `, [token], (err, results, field) => {
        if (err) {
          throw 'The token might have expired or doesn\'t exist.';
        }

        return resolve(results);
      });
    });
  }

  resetSessionTokenWithOldToken(token) {
    const newToken = ClubModel.generateToken();
    return new Promise((resolve, reject) => {
      this.connection.query(`
        UPDATE clubs SET session_token = ?
        WHERE session_token = ?
      `, [newToken, token], (err, results, field) => {
        if (err) throw err;

        return resolve(results);
      });
    });
  }


  changeInfo(club, data) {
    const info = data.info;
    {
      const error = new ClubValidation().validateInfo(info);
      if (error) throw error;
    }

    return ClubModel.isPassword(data.password)
      .then(
        () => {
          let sql = "UPDATE clubs SET ";
          const inserts = [];
          sql = mysql.format(sql, inserts);
          if (club.email !== info.email) {
            sql += ' email = ?, confirmed = 0, confirm_token'
            //although this will work, it will still say "welcome to matchpoint";
            const confirmToken = ClubModel.generateToken();
            inserts.push(info.email, confirmToken);
          }
          sql += 'city = ?, state = ? ';
          inserts.push(info.city, info.state);
          club.location = { ...info };
          sql += 'WHERE id = ?';
          inserts.push(club.id);
          connect.query(sql, inserts, (err, results, field) => {
            if (err) throw err;
          })
        },
        (err) => {
          return Promise.reject({ password: "Old password does not match." });
        }
      );
  }

  changePassword(id, info) {
    const { oldPassword, newPassword } = info;
    if (newPassword.length < 8) {
      throw "Password must have at least 8 characters.";
    }

    if (oldPassword === newPassword) {
      return Promise.resolve();
    }

    return club.isPassword(oldPassword)
      .then(
        () => this.generatePasswordDigest(newPassword),
        (err) => {
          throw "Password is incorrect";
        }
      ).then((digest) => {
        return new Promise((resolve, reject) => {
          this.connection.query(`
            UPDATE clubs
            SET password_digest = ?
            WHERE id = ?`, [digest, id], (err, results, field) => {
            if (err) throw(err);

            return resolve(results);
          });
        });
      });
  }

  newUser(user) {
    {
      const err = ClubValidation.validate(user);
      if (err) throw err;
    }

    return ClubModel.generatePasswordDigest(user.password)
      .then((digest) => {
        return new Promise((resolve, reject) => {
          this.connection.beginTransaction((tError) => {
            if (tError) throw tError;

            this.connection.query(`
             INSERT INTO clubs
             (short_id, username, email, club_name, password_digest, session_token)
             VALUES
             (?, ?, ?, ?, ?, ?)`,
             [shortid.generate(), user.username.toLowerCase(), user.email, user.clubName, digest, ClubModel.generateToken()],
             (err, results, field) => {
                if (err) {
                  this.connection.rollback();
                  throw(err);
                }
                resolve(results.insertId);
              });
          });
        }).then(clubId => this.insertGeolocations(user, clubId));
      });
  }

  insertGeolocations(user, clubId) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `INSERT INTO club_geolocations
          (city, state, address, club_id)
          VALUES (?, ?, ?, ?)`,
          [user.city, user.state, user.address, clubId], (err, results, field) => {
            if (err) {
              this.connection.rollback();
              throw(err);
            }
            this.connection.commit();
            resolve(clubId);
          });
    });
  }

  resetSessionToken(club) {
    const token = ClubModel.generateToken();
    return new Promise((resolve, reject) => {
      this.connection.query(`
       UPDATE clubs
       SET session_token = ?
       WHERE username = ?`, [token, club.username], (err, results, field) => {
        if (err) throw(err);

        return resolve(results);
      });
    });
  }

  findBySessionToken(sessionToken) {
    // check if I need all the fields
    if (!sessionToken) {
      throw 'Session token cnanot be empty';
    }
    return new Promise((resolve, reject) => {
      this.connection.query(`
        SELECT id, short_id, username, club_name,
          email, verified, token, confirm_token,
          password_digest, updated_at, created_on
        FROM clubs
        WHERE session_token = ?`, [sessionToken], (err, results, field) => {
        if (err) throw(err);

        return resolve(results);
      });
    });
  }

  resetPasswordWithToken(token, newPassword) {
    return ClubModel.generatePasswordDigest(newPassword)
      .then((digest) => {
        return new Promise((resolve, reject) => {
          this.connection.query(`
           UPDATE clubs
           SET password_digest = ?, token = ?
           WHERE token = ?`, [digest, "", token], (err, results, field) => {
            if (err) throw(err);

            return resolve(results);
          });
        });
      });
  }

  // incomplete
  findByUsernameAndPassword(username, password) {
    let club;

    return new Promise((resolve, reject) => {
      this.connection.query(`
       SELECT * FROM clubs
       WHERE username = ?`, [username], (err, results, field) => {
        if (err) throw(err);

        const digest = results[0].password_digest;
        ClubModel.isPassword(password, digest).then(
          () => {
            const club = this.formatClubRow(results[0]);
            delete club.password_digest;
            return resolve(club);
          },
          () => {
            throw('Passwords do not match.');
          }
        )
      });
    });
  }
}

export default (connection) => {
  return new ClubModel(connection);
};

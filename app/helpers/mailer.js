import NodeMailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default class Mailer {
  contructor(recipent) {
    this.recipient = user;
  }
  static getTransport() {
    const smtpOptions = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "noreplymatchpoints@gmail.com",
        pass: ""
      }
    };
    return NodeMailer.createTransport(smtpTransport(smtpOptions));
  }

  confirmationOptions() {
    let emailHTML = `<p>Dear ${this.recipient.username}</p>`;
    emailHTML += "<p>Thank you for joining Match Points.</p>";
    emailHTML += "<p>To confirm your registration, click on the link below.</p>";
    emailHTML += `<a href="https://matchpoints.org/accounts/activate?token=${this.recipient.confirmToken}">https://matchpoints.org/accounts/activate?token=${this.recipient.confirmToken}</a>`;
    emailHTML += "<p>Looking forward to serving your need.</p>";
    emailHTML += "<p>Best,</br><a href='https://matchpoints.org'>MatchPoints</a></p>";
    let emailText = `Dear ${this.recipient.username}\n\n`;
    emailText += "Thank you for joining Match Points.\n\n";
    emailText += "To confirm your registration, click on the link below:\n\n";
    emailText += `https://matchpoints.org/accounts/activate?token=${this.recipient.confirmToken}\n\n`;
    emailText += "Looking forward to serving your need.\n\n";
    emailText += "Best,\nMatchPoints\n(https://matchpoints.org)";
    return {
      from: '"Match points" <noreplymatchpoints@gmail.com>',
      to: this.recipient.email,
      subject: "Please confirm your account",
      text: emailText,
      html: emailHTML
    };
  }

  resetOptions() {
    let emailHTML = `<p>Dear ${this.recipient.username}</p>`;
    emailHTML += "<p>Please follow the link below to reset your password</p>";
    emailHTML += `<a href="https://matchpoints.org/reset?token=${this.recipient.token}">https://matchpoints.org/accounts/activate?token=${this.recipient.confirmToken}</a>`;
    emailHTML += "<p>Looking forward to serving your need.</p>";
    emailHTML += "<p>Best,</br><a href='https://matchpoints.org'>MatchPoints</a></p>";
    let emailText = `Dear ${this.recipient.username}\n\n`;
    emailText += "Thank you for joining Match Points.\n\n";
    emailText += "To confirm your registration, click on the link below:\n\n";
    emailText += `https://matchpoints.org/reset?token=${this.recipient.token}\n\n`;
    emailText += "Looking forward to serving your need.\n\n";
    emailText += "Best,\nMatchPoints\n(https://matchpoints.org)";
    return {
      from: '"Match points" <noreplymatchpoints@gmail.com>',
      to: this.recipient.email,
      subject: "Reset your password",
      text: emailText,
      html: emailHTML
    };
  }

  sendConfirmationEmail() {
    return new Promise((resolve, reject) => {
      this.getTransport().sendMail(this.confirmationOptions(), (err, info) => {
        if (err) {
          return reject(err);
        }

        return resolve(info);
      })
    });
  }

  sendResetEmail() {
    return new Promise((resolve, reject) => {
      this.getTransport().sendMail(this.resetEmailOptions(), (err, info) => {
        if (err) {
          return reject(err);
        }

        return resolve(info);
      })
    });
  }
}
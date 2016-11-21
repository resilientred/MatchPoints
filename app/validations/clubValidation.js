export default class ClubValidation {
  validateUsername(username) {
    if (username.length < 8) {
      return "Username must be at least 8 characters long";
    }

    return null;
  }

  validatePassword(password) {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }

    return null;
  };

  validateEmail(email) {
    const emailRegex = new RegExp(".+@.+..+", "i");

    if (!emailRegex.test(email)) {
      return "Email is not a valid format";
    }

    return null;
  };

  validateClubName(clubName) {
    if (clubName.length === 0) {
      return "Club name cannot be empty";
    }
  }

  validateCity(city) {
    if (city.length === 0) {
      return "City cannot be empty";
    }
  }

  validateState(stateName) {
    if (stateName.length === 0) {
      return "State cannot be empty";
    }
  }
  validateInfo(club) {
    let err = this.validateEmail(club.email);
    if (err) return { email: err };
    err = this.validateCity(club.city);
    if (err) return { city: err };
    err = this.validateState(club.state);
    if (err) return { state: err };
  }
  validate(club) {
    let err = this.validateUsername(club.username);
    if (err) return err;
    err = this.validatePassword(club.password);
    if (err) return err;
    err = this.validateClubName(club.clubName);
    if (err) return err;
    err = this.validateCity(club.city);
    if (err) return err;
    err = this.validateState(club.stateName);
    if (err) return err;
  }
}
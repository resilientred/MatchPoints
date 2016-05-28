import ApiUtil from "../utils/apiUtil";


export default {
	fetchCSRF() {
		ApiUtil.apiService({
			url: "/form",
			success: "fetchedCSRF"
		})
	},
	logIn(user) {
		ApiUtil.apiCSRFService({
			method: "POST",
			url: "/session/new",
			data: user,
			success: "loggedIn"
		})
	},

	signUp(user) {
		let _csrf = user._csrf;
		delete user._csrf;
		debugger;
		ApiUtil.apiCSRFService({
			method: "POST",
			url: "/user/new",
			data: user,
			success: "loggedIn"
		}, _csrf)
	}
}
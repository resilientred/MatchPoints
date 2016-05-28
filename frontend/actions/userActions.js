import ApiUtil from "../utils/apiUtil";


export default {
	fetchCSRF() {
		ApiUtil.apiService({
			url: "/form",
			success: "fetchedCSRF"
		})
	},
	logIn(user) {
		ApiUtil.apiService({
			method: "POST",
			url: "/session/new",
			data: user,
			success: "loggedIn"
		})
	},

	signUp(user) {
		ApiUtil.apiService({
			method: "POST",
			url: "/user/new",
			data: user,
			success: "loggedIn"
		})
	}
}
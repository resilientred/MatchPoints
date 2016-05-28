import ApiUtil from "../utils/apiUtil";


export default {
	fetchCSFR() {
		ApiUtil.apiService({
			url: "/form",
			success: "fetchedCSRF"
		})
	}
}
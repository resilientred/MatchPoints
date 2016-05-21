import ApiUtil from "../utils/apiUtil";

class ClientActions {
	fetchUsers() {
		ApiUtil.apiService({
			url: "/api/users",
			success: "fetchedUsers"
		});
	}

	addUser(user) {
		ApiUtil.apiService({
			url: "/api/users",
			method: "POST",
			data: {user: user},
			success: "updatedUser"
		})
	}

	updateUser(id, user) {
		ApiUtil.apiService({
			url: "/api/users/" + id,
			method: "PATCH",
			data: {user: user},
			success: "updatedUser"
		})
	}

	removeUser(id) {
		ApiUtil.apiService({
			url: "/api/users/" + id,
			method: "DELETE",
			success: "removedUser"
		})
	}
}

export default ClientActions;
import ApiUtil from "../utils/apiUtil";
import Dispatcher from "../dispatcher/dispatcher";
import UserConstants from "../constants/userConstants";

class ServerActions {
	fetchedUsers = function(users){
		Dispatcher.dispatch({
			actionType: UserConstants."FETCHED_USERS",
			users: users
		})
	}

	updatedUser = function(user){
		Dispatcher.dispatch({
			actionType: UserConstants."FETCHED_USER",
			user: user
		})
	}

	removedUser = function(user){
		Dispatcher.dispatch({
			actionType: UserConstants."REMOVED_USER",
			user: user
		})
	}
}

export default ServerActions;
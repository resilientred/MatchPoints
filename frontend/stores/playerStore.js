import Dispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import UserConstants from '../constants/userConstants';
let _users = {};

let _resetUsers = (users) => {
	users.forEach(user=>(_users[id] = user));
}; 

let _setUser = (user) => {
	_users[user];
};

let _removeUser = (user) => {
	delete _users[user.id];
};

class UserStore extends Store {	
	all = function(){
		return _users;
	}

	find = function(id){
		return _users[id];
	}

	__onDispatcher = function(payload){
		switch(payload.actionType){
			case UserConstants.FETCHED_USERS:
				_resetUsers(payload.users);
				UserStore.__emitChange();
				break;
			case UserConstants.FETCHED_USER:
				_setUser(payload.user);
				UserStore.__emitChange();
				break;
			case UserConstants.REMOVED_USER:
				_removeUser(payload.user);
				UserStore.__emitChange();
				break;
		}
	}
}

export default UserStore;
	
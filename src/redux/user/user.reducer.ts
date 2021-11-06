import { UserActionType } from './user.types';
import { AnyAction } from 'redux';

const initialState = {
	currentUser: null,
};

const userReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case UserActionType.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		case UserActionType.SIGN_OUT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;

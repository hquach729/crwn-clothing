import { UserActionType, UserAction } from './user.types';

const initialState = {
	currentUser: null,
};

const userReducer = (state = initialState, action: UserAction) => {
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

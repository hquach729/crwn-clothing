import { UserActionType, CurrentUser } from './user.types';

export const setCurrentUser = (user: CurrentUser) => ({
	type: UserActionType.SET_CURRENT_USER,
	payload: user,
});

export const signOutUser = (user: CurrentUser) => ({
	type: UserActionType.SIGN_OUT_USER,
	payload: user,
});

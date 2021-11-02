import { UserActionType, UserAction, CurrentUser } from './user.types';

export const setCurrentUser = (user: CurrentUser): UserAction => ({
	type: UserActionType.SET_CURRENT_USER,
	payload: user,
});

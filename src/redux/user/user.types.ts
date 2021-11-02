import type { User } from 'firebase/auth';
import type { DocumentData } from 'firebase/firestore';

export type CurrentUser = User | DocumentData | null;

export enum UserActionType {
	SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export interface UserAction {
	type: UserActionType;
	payload: any;
}

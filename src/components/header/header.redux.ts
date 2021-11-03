import { Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import React from 'react';

import { DocumentData } from '@firebase/firestore';
import { User } from '@firebase/auth';

const mapState = ({ user: { currentUser } }: RootState) => ({ currentUser });
const mapDispatch = (dispatch: Dispatch) => ({});

export const reduxStoreConnector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface HeaderProps extends PropsFromRedux, RouteComponentProps {
	currentUser: User | DocumentData | null;
	handleClick?: () => void;
}

export const connector = (component: React.ComponentType<HeaderProps>) => {
	return reduxStoreConnector(withRouter(component));
};

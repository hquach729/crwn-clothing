import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';

import { RouteComponentProps, withRouter } from 'react-router';

import { DocumentData } from '@firebase/firestore';
import { User } from '@firebase/auth';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// const mapState = ({ user: { currentUser } }: RootState) => ({ currentUser });

const mapState = (state: RootState) => ({
	currentUser: selectCurrentUser(state),
});
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

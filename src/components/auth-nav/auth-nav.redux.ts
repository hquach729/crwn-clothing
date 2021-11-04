import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { RouteComponentProps, withRouter } from 'react-router';

import { DocumentData } from '@firebase/firestore';
import { User } from '@firebase/auth';

const mapState = ({ user: { currentUser } }: RootState) => ({ currentUser });
const mapDispatch = (dispatch: Dispatch) => ({});

export const reduxStoreConnector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface AuthNavProps extends PropsFromRedux, RouteComponentProps {
	currentUser: User | DocumentData | null;
	handleClick?: () => void;
}

export const connectorReduxWithRouter = (
	component: React.ComponentType<AuthNavProps>
) => {
	return reduxStoreConnector(withRouter(component));
};

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';

const mapState = ({ cart: { visible, cartItems } }: RootState) => ({
	visible,
	cartItems,
});

export const reduxStoreConnector = connect(mapState, {});

type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface CartDropDownProps extends PropsFromRedux {}

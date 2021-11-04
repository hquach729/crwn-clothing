import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleVisibility } from '../../redux/cart/cart.actions';

const mapState = ({ cart: { cartItems } }: RootState) => ({
	cartItems,
});

const mapDispatch = (dispatch: Dispatch) => ({
	toggleVisibility: () => dispatch(toggleVisibility()),
});

export const reduxStoreConnector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface CartIconProps extends PropsFromRedux {}

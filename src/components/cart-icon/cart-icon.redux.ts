import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleVisibility } from '../../redux/cart/cart.actions';
// import { CartItem } from '../../redux/cart/cart.types';

const mapState = ({ cart: { cartItems, totalCartItem } }: RootState) => ({
	cartItems,
	totalCartItem,
});

const mapDispatch = (dispatch: Dispatch) => ({
	toggleVisibility: () => dispatch(toggleVisibility()),
});

export const reduxStoreConnector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface CartIconProps extends PropsFromRedux {}

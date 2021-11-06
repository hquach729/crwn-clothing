import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from '@reduxjs/toolkit/node_modules/reselect';

const mapState = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal,
});
const mapDispatch = (dispatch: Dispatch) => ({});

interface PropsFromRedux extends ConnectedProps<typeof connector> {}
export const connector = connect(mapState, mapDispatch);
export interface CheckoutPageProps extends PropsFromRedux {}

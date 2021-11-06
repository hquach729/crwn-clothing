import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
	removeItemFromCart,
	increaseItemQty,
	decreaseItemQty,
} from '../../../redux/cart/cart.actions';
import { ConnectedProps, connect } from 'react-redux';

const mapState = createStructuredSelector({});
const mapDispatch = (dispatch: Dispatch) => ({
	removeItem: (id: number) => dispatch(removeItemFromCart(id)),
	increaseQty: (id: number) => dispatch(increaseItemQty(id)),
	decreaseQty: (id: number) => dispatch(decreaseItemQty(id)),
});

export const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

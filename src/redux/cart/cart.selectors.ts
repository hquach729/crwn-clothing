import { RootState } from '../store';
import { createSelector } from 'reselect';

const selectCart = (state: RootState) => state.cart; // Get a slice of the whole state

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemCounts = createSelector(
	[selectCartItems],
	(cartItems) => {
		return cartItems.reduce((accumulatedQty, cartItem) => {
			return cartItem.qty ? accumulatedQty + cartItem.qty : accumulatedQty;
		}, 0);
	}
);

export const selectCartVisibility = createSelector(
	[selectCart],
	(cart) => cart.visible
);

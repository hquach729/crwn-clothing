import { RootState } from '../store';
import { createSelector } from 'reselect';
import { CartItem } from './cart.types';

const selectCart = (state: RootState) => state.cart; // Get a slice of the whole state

/**
 *
 */
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

/**
 *
 */
export const selectCartItemCounts = createSelector(
	[selectCartItems],
	(cartItems) => {
		return cartItems.reduce((accumulatedQty, cartItem) => {
			return cartItem.qty ? accumulatedQty + cartItem.qty : accumulatedQty;
		}, 0);
	}
);

/**
 *
 */
export const selectCartVisibility = createSelector(
	[selectCart],
	(cart) => cart.visible
);

/**
 * Calculate the total price for all the item in the cart
 * @param cart
 * @returns { number } total price of all the item in the cart
 */
const calculateTotalPrice = (cart: CartItem[]) =>
	cart.reduce(
		(accumulatedCartTotal, cartItem) =>
			cartItem.qty
				? cartItem.price * cartItem.qty + accumulatedCartTotal
				: accumulatedCartTotal,
		0 // set the accumulatedCartTotal initial value to 0
	);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	calculateTotalPrice(cartItems)
);

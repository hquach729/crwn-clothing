import { CartState, CartItem } from './cart.types';

/**
 *
 * @param state
 * @param param1
 * @returns
 */
export const addItemToCart = (
	state: CartState,
	{ id, name, price }: CartItem
) => ({
	...state.items,
	[name]: [
		...(state.items[name]
			? [...state.items[name], { id, name, price }]
			: [{ id, name, price }]),
	],
});
/**
 *
 * @param param0
 * @param itemToAdd
 * @returns
 */
export const addItemToShoppingCart = (
	{ cartItems }: CartState,
	itemToAdd: CartItem
) => {
	const existing = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

	if (existing) {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToAdd.id
				? { ...cartItem, qty: cartItem.qty! + 1 }
				: cartItem
		);
	} else {
		return [...cartItems, { ...itemToAdd, qty: 1 }];
	}
};
/**
 *
 * @param param0
 * @param id
 * @returns {CartItem[]}
 */
export const removeItemFromCart = ({ cartItems }: CartState, id: number) =>
	cartItems.filter((item) => item.id !== id);

/**
 * Increase the quantity of item in cart
 * @param cartItems
 * @param id
 * @returns {CartItem[]}
 */
export const increaseItemQty = ({ cartItems }: CartState, id: number) =>
	cartItems.map((item) =>
		item.id === id ? { ...item, qty: item.qty + 1 } : item
	);

/**
 * Decrease the quantity of item in cart, if quantity become 0, then item is remove from cart
 * @param cartItems
 * @param id
 * @returns {CartItem[]}
 */
export const decreaseItemQty = ({ cartItems }: CartState, id: number) =>
	cartItems
		.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
		.filter((item) => item.qty !== 0);

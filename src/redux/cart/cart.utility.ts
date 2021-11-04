import { CartState, CartItem } from './cart.types';

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

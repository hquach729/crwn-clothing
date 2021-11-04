import { CartActionTypes, CartItem } from './cart.types';

export const setCartDropDownVisibility = (visible: boolean) => ({
	type: CartActionTypes.SET_DROPDOWN_VISIBILITY,
	// payload: { visible },
	payload: visible,
});

export const setCartItemCount = (itemCount: number) => ({
	type: CartActionTypes.SET_ITEM_COUNT_IN_CART,
	// payload: { itemCount },
	payload: itemCount,
});

export const toggleVisibility = () => ({
	type: CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY,
});

export const addItemToCart = (item: CartItem) => ({
	type: CartActionTypes.ADD_ITEM_TO_CART,
	// payload: { item },
	payload: item,
});

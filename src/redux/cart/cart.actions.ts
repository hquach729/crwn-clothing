import { CartActionTypes } from './cart.types';

export const setCartDropDownVisibility = (visible: boolean) => ({
	type: CartActionTypes.SET_DROPDOWN_VISIBILITY,
	payload: { visible },
});

export const setCartItemCount = (itemCount: number) => ({
	type: CartActionTypes.SET_ITEM_COUNT_IN_CART,
	payload: { itemCount },
});

export const toggleVisibility = () => ({
	type: CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY,
});

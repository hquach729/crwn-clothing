import { CartActionTypes, CartItem } from './cart.types';

export const setCartDropDownVisibility = (visible: boolean) => ({
	type: CartActionTypes.SET_DROPDOWN_VISIBILITY,
	payload: visible,
});

export const setCartItemCount = (itemCount: number) => ({
	type: CartActionTypes.SET_ITEM_COUNT_IN_CART,
	payload: itemCount,
});

export const toggleVisibility = () => ({
	type: CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY,
});

export const addItemToCart = (item: CartItem) => ({
	type: CartActionTypes.ADD_ITEM_TO_CART,
	payload: item,
});

export const removeItemFromCart = (id: number) => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: id,
});

export const decreaseItemQty = (id: number) => ({
	type: CartActionTypes.DECREASE_ITEM_QTY,
	payload: id,
});

export const increaseItemQty = (id: number) => ({
	type: CartActionTypes.INCREASE_ITEM_QTY,
	payload: id,
});

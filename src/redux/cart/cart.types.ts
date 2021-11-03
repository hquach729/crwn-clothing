export enum CartActionTypes {
	UPDATE_CART = 'UPDATE_CART',
	ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
	REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
	SET_ITEM_COUNT_IN_CART = 'SET_ITEM_COUNT_IN_CART',
	SET_DROPDOWN_VISIBILITY = 'SET_DROPDOWN_VISIBILITY',
	TOGGLE_DROPDOWN_VISIBILITY = 'TOGGLE_DROPDOWN_VISIBILITY',
}

export interface CartItem {
	name: string;
	price: number;
}

export interface CartState {
	visible: boolean;
	items: number;
}

export type CartAction = {
	type: CartActionTypes;
	payload: CartState;
};

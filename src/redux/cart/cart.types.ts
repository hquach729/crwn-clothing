export enum CartActionTypes {
	UPDATE_TOTAL = 'UPDATE_TOTAL',
	UPDATE_CART = 'UPDATE_CART',
	ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
	REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
	SET_ITEM_COUNT_IN_CART = 'SET_ITEM_COUNT_IN_CART',
	SET_DROPDOWN_VISIBILITY = 'SET_DROPDOWN_VISIBILITY',
	TOGGLE_DROPDOWN_VISIBILITY = 'TOGGLE_DROPDOWN_VISIBILITY',
	GET_TOTAL_ITEM = 'GET_TOTAL_ITEM',
	ADD_ITEM = 'ADD_ITEM',
}

export type Cart = { [key: string]: CartItem[] };

export interface CartItem {
	id?: number;
	name: string;
	price: number;
	qty?: number;
}

export interface CartState {
	visible: boolean;
	totalItem: number;
	cartItems: CartItem[];
	items: Cart;
}

export type CartAction = {
	type: CartActionTypes;
	payload: any;
};

export interface Test {}

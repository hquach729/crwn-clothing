export enum CartActionTypes {
	SET_ITEM_COUNT_IN_CART = 'SET_ITEM_COUNT_IN_CART',
	SET_DROPDOWN_VISIBILITY = 'SET_DROPDOWN_VISIBILITY',
	TOGGLE_DROPDOWN_VISIBILITY = 'TOGGLE_DROPDOWN_VISIBILITY',
}

export interface CartState {
	visible: boolean;
	items: number;
}

export type CartAction = {
	type: CartActionTypes;
	payload: CartState;
};

import { CartAction, CartState, CartActionTypes } from './cart.types';

const initialState: CartState = {
	visible: false,
	items: 0,
};

const cartReducer = (state = initialState, action: CartAction) => {
	switch (action.type) {
		case CartActionTypes.SET_DROPDOWN_VISIBILITY:
			return { ...state, visible: action.payload.visible };
		case CartActionTypes.SET_ITEM_COUNT_IN_CART:
			return { ...state, items: action.payload.items };
		case CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY:
			return { ...state, visible: !state.visible };
		default:
			return state;
	}
};

export default cartReducer;

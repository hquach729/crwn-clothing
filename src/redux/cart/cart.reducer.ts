import { CartState, CartActionTypes, CartAction } from './cart.types';

const initialState: CartState = {
	visible: false,
	cartItems: [],
};

const cartReducer = (state = initialState, action: CartAction) => {
	switch (action.type) {
		case CartActionTypes.SET_DROPDOWN_VISIBILITY:
			return { ...state, visible: action.payload };
		case CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY:
			return { ...state, visible: !state.visible };
		case CartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		default:
			return state;
	}
};

export default cartReducer;

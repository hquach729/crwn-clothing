import { CartState, CartActionTypes, CartAction } from './cart.types';
import { addItemToCart, addItemToShoppingCart } from './cart.utility';

const initialState: CartState = {
	visible: false,
	cartItems: [],
	totalItem: 0,
	items: {},
};

const cartReducer = (state = initialState, { type, payload }: CartAction) => {
	switch (type) {
		case CartActionTypes.SET_DROPDOWN_VISIBILITY:
			return { ...state, visible: payload };
		case CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY:
			return { ...state, visible: !state.visible };
		case CartActionTypes.UPDATE_TOTAL:
			return { ...state, totalItem: state.cartItems.length };
		case CartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItemToShoppingCart(state, payload),
				items: addItemToCart(state, payload),
			};
		default:
			return state;
	}
};

export default cartReducer;

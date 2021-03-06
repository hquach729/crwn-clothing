import { CartState, CartActionTypes, CartAction } from './cart.types';
import {
	addItemToShoppingCart,
	removeItemFromCart,
	increaseItemQty,
	decreaseItemQty,
} from './cart.utility';

const initialState: CartState = {
	visible: false,
	cartItems: [],
	totalCartItem: 0,
	items: {},
};

const cartReducer = (state = initialState, { type, payload }: CartAction) => {
	switch (type) {
		case CartActionTypes.SET_DROPDOWN_VISIBILITY:
			return { ...state, visible: payload };
		case CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY:
			return { ...state, visible: !state.visible };
		case CartActionTypes.UPDATE_TOTAL_CART_ITEM:
			return {
				...state,
				totalCartItem: payload
					? state.totalCartItem + 1
					: state.totalCartItem - 1,
			};
		case CartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItemToShoppingCart(state, payload),
			};
		case CartActionTypes.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: removeItemFromCart(state, payload),
			};
		case CartActionTypes.INCREASE_ITEM_QTY:
			return {
				...state,
				cartItems: increaseItemQty(state, payload),
			};
		case CartActionTypes.DECREASE_ITEM_QTY:
			return {
				...state,
				cartItems: decreaseItemQty(state, payload),
			};
		default:
			return state;
	}
};

export default cartReducer;

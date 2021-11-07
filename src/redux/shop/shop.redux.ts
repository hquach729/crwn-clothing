import { AnyAction } from 'redux';
import { ShopActionTypes } from './shop.types';
import data from '../../data/shop.data';

const initialState = {
	shopItems: data,
	// shopItems: data.map((product) =>
	// 	product.items.map((item) => ({ ...item, qty: undefined }))
	// ),
	// shopItems: data.forEach((product) =>
	// 	product.items.map((item) => ({ ...item, qty: undefined }))
	// ),
};

const shopReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case ShopActionTypes.GET_SHOP_DATA:
			return state;
		default:
			return state;
	}
};

export default shopReducer;

import { AnyAction } from 'redux';
import { SHOP_DATA_VERSION2 as data } from '../../data/shop.data';

const initialState = {
	collections: data,
};

const shopReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;

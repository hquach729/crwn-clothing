import { AnyAction } from 'redux';
// import data, { SHOP_DATA_VERSION2 } from '../../data/shop.data';
import { SHOP_DATA_VERSION2 } from '../../data/shop.data';

const initialState = {
	// shopItems: data,
	collections: SHOP_DATA_VERSION2,
};

const shopReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;

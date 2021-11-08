import { ShopActionTypes } from './shop.types';

export const getShopData = () => ({ type: ShopActionTypes.GET_SHOP_DATA });
export const getShopCollection = (collection: string) => ({
	type: ShopActionTypes.GET_SHOP_COLLECTION,
	payload: collection,
});

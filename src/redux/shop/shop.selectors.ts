import { RootState } from '../store';
import { createSelector } from 'reselect';

const selectShop = (state: RootState) => state.shop;

export const selectShopItems = createSelector(
	[selectShop],
	(shop) => shop.shopItems
);

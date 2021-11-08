import { RootState } from '../store';
import { createSelector } from 'reselect';
import type { UrlParam } from './shop.types';
import memoize from 'lodash.memoize';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
	[selectCollections],
	(collections) =>
		Object.keys(collections).map((key) => collections[key as UrlParam])
);

export const selectCollection = memoize((collectionUrlParam: UrlParam) =>
	createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	)
);

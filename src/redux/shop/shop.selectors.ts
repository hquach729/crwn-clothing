import { RootState } from '../store';
import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// const COLLECTION_ID_MAP = {
// 	hats: 1,
// 	sneakers: 2,
// 	jackets: 3,
// 	womens: 4,
// 	mens: 5,
// };

const selectShop = (state: RootState) => state.shop;

// export const selectShopItems = createSelector(
// 	[selectShop],
// 	(shop) => shop.shopItems
// );

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export type UrlParam = 'hats' | 'sneakers' | 'womens' | 'mens' | 'jackets';

export const selectCollection = memoize((collectionUrlParam: UrlParam) =>
	// console.log(collectionUrlParam);
	createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	)
);

// export const selectCollection = createSelector(
// 	[selectShop],
// 	(shop) => shop.collection
// );

// we need to use memorize here since we are return a function, the above we don't
// so if we get call with the same name, this function won't run
// export const selectMyCollection = memoize((name: string) =>
// 	createSelector(
// 		[selectShop],
// 		(shop) =>
// 			shop.shopItems.find((collection) => collection.routeName === name)
// 				?.items || []
// 	)
// );
// export const selectMyCollection = memoize((name: string) =>
// export const selectMyCollection = memoize((name: string) =>
// 	// export const selectMyCollection = memoize((urlParam: number) =>
// 	createSelector(
// 		// [selectCollections],
// 		[selectShop],
// 		// (shopItems) => shopItems[name]
// 		(shop) => shop.shopItems.find((collection) => collection.routeName === name)
// 		// shop.shopItems.find(
// 		// 	(collection) => collection.id === COLLECTION_ID_MAP[urlParam]
// 		// )
// 	)
// );

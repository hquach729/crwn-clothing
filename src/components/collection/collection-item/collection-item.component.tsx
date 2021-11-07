import React from 'react';
import './collection-item.styles.scss';
import {
	CollectionItemProps,
	reduxStoreConnector,
} from './collection-item.redux';

import {
	CustomButton,
	CollectionFooter,
	CollectionItemImage,
} from '../../components';

export const CollectionItem = reduxStoreConnector(
	// ({ item, addItemToCart, handleClick }: CollectionItemProps) => (
	({ item, addItemToCart }: CollectionItemProps) => (
		<div className='collection-item'>
			<CollectionItemImage imageUrl={item.imageUrl} />
			<CollectionFooter name={item.name} price={item.price} />
			<CustomButton
				inverted
				content='Add to Cart'
				// content='Add to Cart'
				onClick={() => addItemToCart(item)}
			/>
		</div>
	)
);

// const CollectionItem = ()

export default CollectionItem;

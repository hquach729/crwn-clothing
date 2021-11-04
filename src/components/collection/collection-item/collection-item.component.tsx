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
	({
		item: { imageUrl, price, name, id },
		addItemToCart,
	}: CollectionItemProps) => (
		<div className='collection-item'>
			<CollectionItemImage imageUrl={imageUrl} />
			<CollectionFooter name={name} price={price} />
			<CustomButton
				inverted
				content='Add to Cart'
				onClick={() => addItemToCart({ imageUrl, id, name, price })}
			/>
		</div>
	)
);

export default CollectionItem;

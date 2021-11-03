import React from 'react';
import './collection-item.styles.scss';

import {
	CollectionItemProps,
	reduxStoreConnector,
} from './collection-item.redux';
import { CustomButton } from '../../custom-button/custom-button.component';
import { CollectionFooter } from '../collection-footer/collection-footer.component';
import { CollectionItemImage } from '../collection-item-image/collection-item-image.component';

const CollectionItem = reduxStoreConnector(
	({ imageUrl, name, price, addToCart }: CollectionItemProps) => (
		<div className='collection-item'>
			<CollectionItemImage imageUrl={imageUrl} />
			<CollectionFooter name={name} price={price} />
			<CustomButton inverted content='Add to Cart' onClick={addToCart} />
		</div>
	)
);

export default CollectionItem;

import React from 'react';
import './collection-item.styles.scss';

import type { CollectionItemProps } from '../../../types';
import { CustomButton } from '../../custom-button/custom-button.component';
import { CollectionFooter } from '../collection-footer/collection-footer.component';
import { CollectionItemImage } from '../collection-item-image/collection-item-image.component';

const CollectionItem = ({ imageUrl, name, price }: CollectionItemProps) => (
	<div className='collection-item'>
		<CollectionItemImage imageUrl={imageUrl} />
		<CollectionFooter name={name} price={price} />
		<CustomButton inverted content='Add to Cart' />
	</div>
);

export default CollectionItem;

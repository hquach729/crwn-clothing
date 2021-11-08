import React from 'react';
import './collection-preview.styles.scss';

import CollectionList from '../collection-list/collection-list.component';
import { ShopItem } from '../../../types';

interface CollectionPreviewProps {
	title: string;
	items: ShopItem[];
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toLocaleUpperCase()}</h1>
		<div className='preview'>
			<CollectionList items={items} />
		</div>
	</div>
);

export default CollectionPreview;

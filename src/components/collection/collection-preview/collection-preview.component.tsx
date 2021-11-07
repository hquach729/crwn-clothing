import React from 'react';
import './collection-preview.styles.scss';

import CollectionList from '../collection-list/collection-list.component';
import CollectionTitle from '../collection-title/collection-title.component';
import { ShopItem } from '../../../types';

interface CollectionPreviewProps {
	displayItem?: number | boolean;
	title: string;
	items: ShopItem[];
}

const CollectionPreview = ({
	title,
	items,
}: // displayItem,
CollectionPreviewProps) => (
	<div className='collection-preview'>
		<CollectionTitle title={title} />
		<CollectionList items={items} />
	</div>
);

export default CollectionPreview;

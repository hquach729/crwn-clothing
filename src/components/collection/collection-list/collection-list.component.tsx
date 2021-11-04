import React from 'react';
import './collection-list.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';
import type { Item } from '../../../types';

interface CollectionListProps {
	items: Item[];
	displayItem?: number;
}

const CollectionList = ({ items, displayItem = 4 }: CollectionListProps) => (
	<div className='preview'>
		{items
			.filter((_, idx) => idx < displayItem)
			.map((item) => (
				<CollectionItem key={item.id} item={item} />
			))}
	</div>
);

export default CollectionList;

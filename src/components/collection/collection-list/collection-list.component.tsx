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
			.filter((item, idx) => idx < displayItem)
			.map(({ id, ...otherItemProps }) => (
				<CollectionItem key={id} {...otherItemProps} />
			))}
	</div>
);

export default CollectionList;

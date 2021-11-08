import React from 'react';
import './collection-list.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';
import { ShopItem } from '../../../types';

interface CollectionListProps {
	items: ShopItem[];
	displayItem?: number;
}

const CollectionList = ({ displayItem = 4, items }: CollectionListProps) => (
	<div className='preview'>
		{items
			.filter((_, idx) => idx < displayItem)
			.map((item) => (
				<CollectionItem key={item.id} item={item} />
			))}
	</div>
);

// interface CollectionListProps {
// 	collection: ShopItem[];
// }

// const CollectionList = ({ collection }: CollectionListProps) => (
// 	<>
// 		{collection.map((item) => (
// 			<CollectionItem key={item.id} item={item} />
// 		))}
// 	</>
// );

export default CollectionList;

import React from 'react';
import './collection-preview.styles.scss';

import CollectionList from '../collection-list/collection-list.component';
import type { CollectionPreviewProps } from '../../../types';

export const CollectionPreview = ({
	title,
	items,
	routeName,
}: CollectionPreviewProps) => (
	<div className='collection-preview'>
		<h1 className='title' onClick={() => console.log(routeName)}>
			{title.toLocaleUpperCase()}
		</h1>
		<div className='preview'>
			<CollectionList items={items} displayItem={4} />
		</div>
	</div>
);

export default CollectionPreview;

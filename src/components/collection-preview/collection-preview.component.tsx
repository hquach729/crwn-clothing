import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';
import type { CollectionPreviewProps } from '../../types';

const CollectionPreview = ({
	title,
	items,
	routeName,
	displayItem = 4,
}: CollectionPreviewProps) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toLocaleUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((_, idx) => idx < displayItem)
				.map(({ id, ...otherItemProps }) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;

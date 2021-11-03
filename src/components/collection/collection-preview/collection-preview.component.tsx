import React from 'react';
import './collection-preview.styles.scss';

import CollectionList from '../collection-list/collection-list.component';
import CollectionTitle from '../collection-title/collection-title.component';
import { CollectionPreviewProps } from '../../../types';

export const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
	<div className='collection-preview'>
		<CollectionTitle title={title} />
		<CollectionList items={items} displayItem={4} />
	</div>
);

export default CollectionPreview;

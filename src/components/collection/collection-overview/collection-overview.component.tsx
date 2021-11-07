import React from 'react';
import './collection-overview.styles.scss';
import CollectionPreviewList from '../collection-preview-list/collection-preview-list.component';

const CollectionOverview = () => (
	<div className='collection-overview'>
		<CollectionPreviewList />
	</div>
);

export default CollectionOverview;

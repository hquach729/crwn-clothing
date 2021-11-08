import React from 'react';
import './collection-title.styles.scss';

interface CollectionTitleProps {
	title: string;
}

export const CollectionTitle = ({ title }: CollectionTitleProps) => (
	<h1 className='title'>{title.toLocaleUpperCase()}</h1>
);

export default CollectionTitle;

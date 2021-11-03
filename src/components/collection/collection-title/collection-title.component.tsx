import React from 'react';
import './collection-title.styles.scss';

interface CollectionTitleProps {
	title: string;
	routeName?: string;
	handleClick?: () => void;
}

export const CollectionTitle = ({
	title,
	routeName,
	handleClick,
}: CollectionTitleProps) => (
	<h1 className='title'>{title.toLocaleUpperCase()}</h1>
);

export default CollectionTitle;

import React from 'react';
import './collection-item-image.styles.scss';

interface CollectionItemImageProps
	extends React.HTMLAttributes<HTMLDivElement> {
	imageUrl: string;
}

export const CollectionItemImage = ({
	imageUrl,
	...otherProps
}: CollectionItemImageProps) => (
	// <div {...otherProps} style={{ backgroundImage: `url(${imageUrl})` }} />
	<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
);

export default CollectionItemImage;

import React from 'react';
import './collection-footer-name.styles.scss';

interface CollectionFooterNameProps {
	name: string;
}
export const CollectionFooterName = ({ name }: CollectionFooterNameProps) => (
	<span className='name'>{name}</span>
);

export default CollectionFooterName;

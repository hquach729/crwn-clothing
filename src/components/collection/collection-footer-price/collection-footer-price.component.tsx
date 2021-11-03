import React from 'react';
import './collection-footer-price.styles.scss';

interface Props {
	price: number;
}

export const CollectionFooterPrice = ({ price }: Props) => (
	<span className='price'>{`$${price}`}</span>
);

export default CollectionFooterPrice;

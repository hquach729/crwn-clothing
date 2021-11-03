import React from 'react';
import './collection-footer.styles.scss';

import Name from '../collection-footer-name/collection-footer-name.component';
import Price from '../collection-footer-price/collection-footer-price.component';

interface CollectionFooterProps {
	name: string;
	price: number;
}

export const CollectionFooter = ({ name, price }: CollectionFooterProps) => (
	<div className='collection-footer'>
		<Name name={name} />
		<Price price={price} />
	</div>
);

export default CollectionFooter;

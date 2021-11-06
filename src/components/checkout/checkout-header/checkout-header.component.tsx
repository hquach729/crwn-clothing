import React from 'react';
import './checkout-header.styles.scss';

interface HeaderBlockProps {
	content: string;
}
const HeaderBlock = ({ content }: HeaderBlockProps) => (
	<div className='header-block'>{content}</div>
);

const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const CheckoutHeader = () => (
	<div className='checkout-header'>
		{headers.map((name, index) => (
			<HeaderBlock content={name} key={index} />
		))}
	</div>
);

export default CheckoutHeader;

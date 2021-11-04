import React from 'react';
import './cart-item.styles.scss';

import { CartItemProps } from './cart-item.redux';

const CartItem = ({ item: { name, price, imageUrl, qty } }: CartItemProps) => (
	<div className='cart-item'>
		<img src={imageUrl} alt={name} />
		<div className='item-details'>
			<span className='name'>{name}</span>
			<span className='price'>
				{qty} x ${price}
			</span>
		</div>
	</div>
);

export default CartItem;

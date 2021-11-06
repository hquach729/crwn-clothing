import React from 'react';
import './checkout-item.styles.scss';
import { ShopItem } from '../../../types';
import { PropsFromRedux, connector } from './checkout-item.redux';

interface CheckOutItemProps extends PropsFromRedux {
	cartItem: ShopItem;
}

const CheckOutItem = connector(
	({
		cartItem: { id, name, imageUrl, qty, price },
		removeItem,
		increaseQty,
		decreaseQty,
	}: CheckOutItemProps) => (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt={name} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => decreaseQty(id)}>
					&#10094;
				</div>
				<span className='value'>{qty}</span>
				<div className='arrow' onClick={() => increaseQty(id)}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div
				className='remove-button'
				onClick={() => {
					console.log('delete click');
					removeItem(id);
				}}
			>
				&#10005;
			</div>
		</div>
	)
);

export default CheckOutItem;

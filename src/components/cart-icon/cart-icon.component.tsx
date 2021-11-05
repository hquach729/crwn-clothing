import React from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartIconProps, reduxStoreConnector } from './cart-icon.redux';
import './cart-icon.styles.scss';

export const CartIcon = reduxStoreConnector(
	({ toggleVisibility, itemCount }: CartIconProps) => (
		<div className='cart-icon' onClick={toggleVisibility}>
			<ShoppingBagIcon className='shopping-icon' />
			<span className='item-count'>{itemCount}</span>
			{/* <span className='item-count'>{cartItems.length}</span> */}
			{/* <span className='item-count'>{totalCartItem}</span> */}
			{/* <span className='item-count'>{totalItems}</span> */}
			{/* <span className='item-count'>{selectCartItemCounts}</span> */}
		</div>
	)
);

export default CartIcon;

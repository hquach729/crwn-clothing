import React from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartIconProps, reduxStoreConnector } from './cart-icon.redux';
import './cart-icon.styles.scss';

export const CartIcon = reduxStoreConnector(
	// ({ cartItems, toggleVisibility, totalCartItem }: CartIconProps) => (
	({ toggleVisibility, totalCartItem }: CartIconProps) => (
		<div className='cart-icon' onClick={toggleVisibility}>
			<ShoppingBagIcon className='shopping-icon' />
			{/* <span className='item-count'>{cartItems.length}</span> */}
			<span className='item-count'>{totalCartItem}</span>
		</div>
	)
);

export default CartIcon;

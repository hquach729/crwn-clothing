import React from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartIconProps, reduxStoreConnector } from './cart-icon.redux';
import './cart-icon.styles.scss';

const CartIcon = ({ items, toggleVisibility }: CartIconProps) => (
	<div className='cart-icon' onClick={toggleVisibility}>
		<ShoppingBagIcon className='shopping-icon' />
		<span className='item-count'>{items}</span>
	</div>
);

export default reduxStoreConnector(CartIcon);

import React from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartIconProps, reduxStoreConnector } from './icon.redux';
import './icon.styles.scss';

const CartIcon = ({ toggleVisibility }: CartIconProps) => (
	<div className='cart-icon' onClick={toggleVisibility}>
		<ShoppingBagIcon className='shopping-icon' />
		{/* <span className='item-count'>{items}</span> */}
	</div>
);

export default reduxStoreConnector(CartIcon);

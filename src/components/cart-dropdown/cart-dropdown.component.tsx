import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CartDropDownProps, reduxStoreConnector } from './cart-dropdown.redux';
import './cart-dropdown.styles.scss';

export const CartDropDown = reduxStoreConnector(
	({ visible }: CartDropDownProps) =>
		visible ? (
			<div className='cart-dropdown'>
				<div className='cart-items'></div>
				<CustomButton content='GO TO CHECKOUT' />
			</div>
		) : null
);

export default CartDropDown;

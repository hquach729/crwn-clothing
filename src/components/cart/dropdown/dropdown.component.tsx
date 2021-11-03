import React from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import { CartDropDownProps, reduxStoreConnector } from './dropdown.redux';
import './dropdown.styles.scss';

const CartDropDown = ({ visible }: CartDropDownProps) =>
	visible ? (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<CustomButton content='GO TO CHECKOUT' />
		</div>
	) : null;

export default reduxStoreConnector(CartDropDown);

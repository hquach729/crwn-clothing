import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CartDropDownProps, reduxStoreConnector } from './cart-dropdown.redux';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

export const CartDropDown = reduxStoreConnector(
	({ visible, cartItems }: CartDropDownProps) =>
		visible ? (
			<div className='cart-dropdown'>
				<div className='cart-items'>
					{cartItems.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
				</div>
				<CustomButton content='GO TO CHECKOUT' />
			</div>
		) : null
);

export default CartDropDown;

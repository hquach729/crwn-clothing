import React from 'react';
import './cart-dropdown.styles.scss';

import { CartDropDownProps, reduxStoreConnector } from './cart-dropdown.redux';
import { withRouter } from 'react-router';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropDown = withRouter(
	reduxStoreConnector(({ visible, cartItems, history }: CartDropDownProps) =>
		visible ? (
			<div className='cart-dropdown'>
				<div className='cart-items'>
					{cartItems.length ? (
						cartItems.map((item) => <CartItem key={item.id} item={item} />)
					) : (
						<span className='empty-message'>Your Cart is Empty</span>
					)}
				</div>
				<CustomButton
					content='GO TO CHECKOUT'
					onClick={() => history.push('/checkout')}
				/>
			</div>
		) : null
	)
);

export default CartDropDown;

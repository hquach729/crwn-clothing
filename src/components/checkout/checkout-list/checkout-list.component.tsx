import React from 'react';
import './checkout-list.styles.scss';
import { connector, PropsFromRedux } from './checkout-list.redux';

import CheckOutItem from '../checkout-item/checkout-item.component';

interface CheckoutListProps extends PropsFromRedux {}

const CheckoutList = connector(({ cartItems }: CheckoutListProps) => (
	<>
		{cartItems.map((item) => (
			<CheckOutItem key={item.id} cartItem={item} />
		))}
	</>
));

export default CheckoutList;

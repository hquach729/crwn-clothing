import React from 'react';
import './checkout.styles.scss';

import Header from '../../components/checkout/checkout-header/checkout-header.component';
import ItemList from '../../components/checkout/checkout-list/checkout-list.component';
import Total from '../../components/checkout/checkout-total/checkout-total.component';

export const CheckoutPage = () => (
	<div className='checkout-page'>
		<Header />
		<ItemList />
		<Total />
	</div>
);

export default CheckoutPage;

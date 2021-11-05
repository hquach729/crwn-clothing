import React from 'react';
import { CheckoutPageProps, connector } from './checkout.redux';
import './checkout.styles.scss';

export const CheckoutPage = connector((props: CheckoutPageProps) => (
	<div className='checkout-page'>Checkout Page</div>
));

export default CheckoutPage;

import { Dispatch } from 'redux';
import './checkout-total.styles.scss';

import { ConnectedProps, connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal } from '../../../redux/cart/cart.selectors';

const mapState = createStructuredSelector({
	cartTotal: selectCartTotal,
});
const mapDispatch = (dispatch: Dispatch) => ({});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface CheckoutTotalProps extends PropsFromRedux {
	className?: string;
}

const CheckoutTotal = connector(
	({ className = 'total', cartTotal }: CheckoutTotalProps) => (
		<div className={className}>
			<span>TOTAL: ${cartTotal}</span>
		</div>
	)
);
export default CheckoutTotal;

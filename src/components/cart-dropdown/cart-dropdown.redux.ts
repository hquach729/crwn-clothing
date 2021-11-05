import { connect, ConnectedProps } from 'react-redux';
// import { RootState } from '../../redux/store';
import {
	selectCartItems,
	selectCartVisibility,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { RouteComponentProps } from 'react-router';

// const mapState = (state: RootState) => ({
// 	visible: selectCartVisibility(state),
// 	cartItems: selectCartItems(state),
// });

const mapState = createStructuredSelector({
	visible: selectCartVisibility,
	cartItems: selectCartItems,
});

export const reduxStoreConnector = connect(mapState, {});

type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface CartDropDownProps
	extends PropsFromRedux,
		RouteComponentProps {}

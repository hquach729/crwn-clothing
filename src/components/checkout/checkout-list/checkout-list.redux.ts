import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { ConnectedProps, connect } from 'react-redux';
import { selectCartItems } from '../../../redux/cart/cart.selectors';

const mapState = createStructuredSelector({
	cartItems: selectCartItems,
});

const mapDispatch = (dispatch: Dispatch) => ({});

export const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;

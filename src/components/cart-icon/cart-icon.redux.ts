import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { toggleVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemCounts } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from '@reduxjs/toolkit/node_modules/reselect';

type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

const mapState = createStructuredSelector({
	itemCount: selectCartItemCounts,
});

const mapDispatch = (dispatch: Dispatch) => ({
	toggleVisibility: () => dispatch(toggleVisibility()),
});

export const reduxStoreConnector = connect(mapState, mapDispatch);
export interface CartIconProps extends PropsFromRedux {}

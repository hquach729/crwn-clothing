import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import {
	// selectShopItems,
	selectCollections,
} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const mapState = createStructuredSelector({
	// collections: selectShopItems,
	collections: selectCollections,
});

const mapDispatch = (dispatch: Dispatch) => ({});

export const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;

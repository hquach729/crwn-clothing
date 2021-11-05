import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Item } from '../../../types';
import { CartActionTypes, CartItem } from '../../../redux/cart/cart.types';
// import { CartItem } from '../../../redux/cart/cart.types';
import { addItemToCart } from '../../../redux/cart/cart.actions';

const mapDispatch = (dispatch: Dispatch) => ({
	addItemToCart: (item: CartItem) => {
		dispatch(addItemToCart(item));
		dispatch({
			type: CartActionTypes.UPDATE_TOTAL_CART_ITEM,
			payload: true,
		});
	},
});

export const reduxStoreConnector = connect(null, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface CollectionItemProps extends PropsFromRedux {
	item: Item;
}

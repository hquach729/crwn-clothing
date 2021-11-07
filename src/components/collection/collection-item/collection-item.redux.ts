import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
// import { Item } from '../../../types';
import { CartActionTypes, CartItem } from '../../../redux/cart/cart.types';
import { ShopItem } from '../../../types';
// import { CartItem } from '../../../redux/cart/cart.types';
import { addItemToCart } from '../../../redux/cart/cart.actions';
// import {} from '../../redux/shop/';

const mapDispatch = (dispatch: Dispatch) => ({
	addItemToCart: (item: CartItem | ShopItem) => {
		// addItemToCart: (item: Item) => {
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
	// item: Item;
	item: CartItem | ShopItem;
	// handleClick: () => {};
	// item: ShopItem;
}

import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Item } from '../../../types';
// import { RootState } from '../../../redux/store';
import { CartActionTypes, CartItem } from '../../../redux/cart/cart.types';
import { addItemToCart } from '../../../redux/cart/cart.actions';

// const mapState = ({ cart: { items } }: RootState) => ({ items });

const mapDispatch = (dispatch: Dispatch) => ({
	addToCart: () => dispatch({ type: CartActionTypes.ADD_ITEM_TO_CART }),
	addItemToCart: (item: CartItem) => dispatch(addItemToCart(item)),
});

export const reduxStoreConnector = connect(null, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface CollectionItemProps extends PropsFromRedux {
	item: Item;
	// id?: number;
	// name: string;
	// imageUrl: string;
	// price: number;
}

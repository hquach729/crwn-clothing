import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
// import { RootState } from '../../../redux/store';
import { CartActionTypes } from '../../../redux/cart/cart.types';

// const mapState = ({ cart: { items } }: RootState) => ({ items });

const mapDispatch = (dispatch: Dispatch) => ({
	addToCart: () => dispatch({ type: CartActionTypes.ADD_ITEM_TO_CART }),
});

export const reduxStoreConnector = connect(null, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface CollectionItemProps extends PropsFromRedux {
	// export interface CollectionItemProps {
	id?: number;
	name: string;
	imageUrl: string;
	price: number;
}

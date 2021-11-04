// import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
// import { Item } from '../../types';
import { CartItem } from '../../redux/cart/cart.types';

const mapState = (state: RootState) => ({});
const mapDispatch = () => ({});

export const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface CartItemProps extends PropsFromRedux {
	item: CartItem;
}

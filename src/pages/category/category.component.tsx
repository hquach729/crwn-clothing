import React from 'react';
import './category.styles.scss';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { selectShopItems } from '../../redux/shop/shop.selectors';
import { withRouter, RouteComponentProps } from 'react-router';
import CollectionItem from '../../components/collection/collection-item/collection-item.component';
import { ShopItem } from '../../types';
import { CartItem } from '../../redux/cart/cart.types';
import CollectionTitle from '../../components/collection/collection-title/collection-title.component';
const mapState = createStructuredSelector({
	shopData: selectShopItems,
});

const mapDispatch = (dispatch: Dispatch) => ({
	addItemToCart: (item: ShopItem | CartItem) => dispatch(addItemToCart(item)),
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface CategoryProps
	extends PropsFromRedux,
		RouteComponentProps<{ categoryId: string }> {}

const Category = withRouter(({ match, shopData }: CategoryProps) => {
	console.log({ match });
	return (
		<div className='category-page'>
			<CollectionTitle title={match.params.categoryId.toLocaleUpperCase()} />
			<div className='category-list'>
				{shopData
					.filter((category) => category.routeName === match.params.categoryId)
					.map((category) =>
						category.items.map((item) => (
							<CollectionItem key={item.id} item={item} />
						))
					)}
			</div>
		</div>
	);
});

export default connector(Category);

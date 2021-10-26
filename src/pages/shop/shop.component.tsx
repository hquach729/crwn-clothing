import React from 'react';
import { RouteComponentProps } from 'react-router';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

type ShopItem = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
};

type SectionTitle = 'Hats' | 'Sneakers' | 'Jackets' | 'Womens' | 'Mens';
type RouteName = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens';

type ShopData = {
	id: number;
	title: SectionTitle | string;
	routeName: RouteName | string;
	items: ShopItem[] | [];
};

interface ShopPageProps extends RouteComponentProps {}
interface ShopPageState {
	collections: ShopData[];
}

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
	constructor(props: ShopPageProps) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview
						key={id}
						displayItem={4}
						{...otherCollectionProps}
					/>
				))}
			</div>
		);
	}
}

export default ShopPage;

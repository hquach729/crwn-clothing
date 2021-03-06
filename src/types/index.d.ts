// import { RouteComponentProps } from 'react-router-dom';
import { CartItem } from '../../../redux/cart/cart.types';

export interface Item {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	qty?: number;
}
export interface CollectionPreviewProps {
	title: string;
	routeName: string;
	// items: Item[];
	// items: ShopItem[];
	items: CartItem[];
	displayItem?: number;
}
export interface CollectionItemProps extends ShopData {}

type ShopItem = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	qty?: number;
};

type SectionTitle = 'Hats' | 'Sneakers' | 'Jackets' | 'Womens' | 'Mens';
type RouteName = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens';

type ShopData = {
	id: number;
	title: SectionTitle | string;
	routeName: RouteName | string;
	items: ShopItem[] | [];
};

// export interface ShopPageProps extends RouteComponentProps {}
// export interface ShopPageState {
// 	collections: ShopData[];
// }

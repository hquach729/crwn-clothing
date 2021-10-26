export interface Item {
	id?: number;
	name: string;
	imageUrl: string;
	price: number;
}
export interface CollectionPreviewProps {
	title: string;
	routeName: string;
	items: Item[];
	displayItem?: number;
}
export interface CollectionItemProps extends Item {}

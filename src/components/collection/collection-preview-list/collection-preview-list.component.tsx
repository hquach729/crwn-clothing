import React from 'react';
import './collection-preview-list.styles.scss';

import { CollectionPreview } from '../';
import { ShopItem } from '../../../types';

type SectionTitle = 'Hats' | 'Sneakers' | 'Jackets' | 'Womens' | 'Mens';
type RouteName = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens';

type ShopData = {
	id: number;
	title: SectionTitle | string;
	routeName: RouteName | string;
	items: ShopItem[];
};

interface CollectionPreviewListProps {
	collections: ShopData[];
}

export const CollectionPreviewList = ({
	collections,
}: CollectionPreviewListProps) => (
	<>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} displayItem={4} {...otherCollectionProps} />
		))}
	</>
);

export default CollectionPreviewList;

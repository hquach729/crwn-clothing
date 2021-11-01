import React from 'react';
import './shop.styles.scss';

import { CollectionPreviewList } from '../../components/collection';
import type { ShopPageState, ShopPageProps, ShopData } from '../../types';
import data from './shop.data';

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
	constructor(props: ShopPageProps) {
		super(props);
		this.state = {
			collections: data as ShopData[],
		};
	}

	render() {
		const { collections } = this.state;

		return (
			<div className='shop-page'>
				<CollectionPreviewList collections={collections} />
			</div>
		);
	}
}

export default ShopPage;

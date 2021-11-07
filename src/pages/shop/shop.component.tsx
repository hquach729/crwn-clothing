import React from 'react';
import './shop.styles.scss';
import { withRouter, Route } from 'react-router';
import CollectionOverview from '../../components/collection/collection-overview/collection-overview.component';
import CategoryPage from '../category/category.component';
import { RouteComponentProps } from 'react-router';

interface ShopPageProps extends RouteComponentProps {}

const ShopPage = withRouter(({ match }: ShopPageProps) => {
	console.log(match);
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:categoryId`} component={CategoryPage} />
		</div>
	);
});

export default ShopPage;

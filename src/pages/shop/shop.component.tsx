import React from 'react';
import './shop.styles.scss';
import { withRouter, Route } from 'react-router';
// import { connect, ConnectedProps } from 'react-redux';
import CollectionOverview from '../../components/collection/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { RouteComponentProps } from 'react-router';
// import { selectMyCollection } from '../../redux/shop/shop.selectors';
// import { RootState } from '../../redux/store';

// const mapState = (
// 	state: RootState,
// 	ownProps: RouteComponentProps<{ categoryId: string }>
// ) => ({
// 	collection: selectMyCollection(ownProps.match.params.categoryId)(state),
// });

// const connector = connect(mapState, null);

interface ShopPageProps extends RouteComponentProps {}

const ShopPage = withRouter(({ match }: ShopPageProps) => {
	console.log(match);
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:categoryId`} component={CollectionPage} />
		</div>
	);
});

export default ShopPage;

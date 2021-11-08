import React from 'react';
import './collection.styles.scss';

import { Dispatch } from 'redux';
import { RouteComponentProps, Redirect } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { ShopItem } from '../../types';

// import CollectionTitle from '../../components/collection/collection-title/collection-title.component';
import CollectionItem from '../../components/collection/collection-item/collection-item.component';
import {
	selectCollection,
	// selectMyCollection,
	UrlParam,
} from '../../redux/shop/shop.selectors';
import { RootState } from '../../redux/store';

// const mapState = createStructuredSelector({
// 	collection: selectCollection,
// });

// interface ShopCollection {
// 	collection: {
// 		id: number;
// 		title: string;
// 		routeName: string;
// 		items: {
// 			id: number;
// 			name: string;
// 			imageUrl: string;
// 			price: number;
// 		}[];
// 	};
// }

// const mapState = (state: RootState, ownProps: CollectionPageProps) => ({
// 	collection: selectMyCollection(ownProps.match.params.categoryId)(state),
// });

// const mapState = (state: RootState, ownProps: PropsFromRouter) => ({
// 	// this is a function that return another function
// 	collection: selectMyCollection(ownProps.match.params.categoryId)(state),
// });

const mapState = (state: RootState, ownProps: PropsFromRouter) => {
	console.log(ownProps.match.params.categoryId);
	return {
		// this is a function that return another function
		// collection: selectMyCollection(ownProps.match.params.categoryId)(state),
		// collection: selectCollection(ownProps.match.params.categoryId)(state),
		collection: selectCollection(ownProps.match.params.categoryId)(state),
	};
};

const mapDispatch = (dispatch: Dispatch) => ({});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromRouter = RouteComponentProps<{ categoryId: UrlParam }>;
// type PropsFromRouter = RouteComponentProps<{ categoryId: string }>;
// type PropsFromRouter = RouteComponentProps<{ categoryId: number}>;

// interface CollectionListProps {
// 	title: string;
// 	collection: ShopItem[];
// }

// const CollectionList = ({ collection, title }: CollectionListProps) => (
// 	<>
// 		<CollectionTitle title={`${title.toLocaleUpperCase()} Collection:`} />
// 		<div className='collection-list'>
// 			{collection.map((item) => (
// 				<CollectionItem key={item.id} item={item} />
// 			))}
// 		</div>
// 	</>
// );

interface CollectionPageProps extends PropsFromRedux, PropsFromRouter {}

const CollectionPage = connector(({ collection }: CollectionPageProps) =>
	collection ? (
		<div className='collection-page'>
			<div className='title'>{collection.title}</div>
			<div className='items'>
				{collection.items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	) : (
		<Redirect to='/' />
	)
);

export default CollectionPage;

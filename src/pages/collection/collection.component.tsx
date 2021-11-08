import React from 'react';
import './collection.styles.scss';

import { Dispatch } from 'redux';
import { RouteComponentProps, Redirect, withRouter } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import CollectionItem from '../../components/collection/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { UrlParam } from '../../redux/shop/shop.types';
import { RootState } from '../../redux/store';

// Redux Setup
const mapState = (state: RootState, ownProps: PropsFromRouter) => ({
	collection: selectCollection(ownProps.match.params.categoryId)(state),
});
const mapDispatch = (dispatch: Dispatch) => ({});
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromRouter = RouteComponentProps<{ categoryId: UrlParam }>;

interface CollectionPageProps extends PropsFromRedux, PropsFromRouter {}

const CollectionList = withRouter(
	connector(({ collection }: PropsFromRedux) => (
		<>
			{collection.items.map((item) => (
				<CollectionItem key={item.id} item={item} />
			))}
		</>
	))
);

const CollectionPage = connector(({ collection }: CollectionPageProps) =>
	collection ? (
		<div className='collection-page'>
			<div className='title'>{collection.title}</div>
			<div className='items'>
				<CollectionList />
			</div>
		</div>
	) : (
		<Redirect to='/' />
	)
);

export default CollectionPage;

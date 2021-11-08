import React from 'react';
import './collection-preview-list.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from '@reduxjs/toolkit/node_modules/reselect';
import { selectCollectionForPreview } from '../../../redux/shop/shop.selectors';

const mapState = createStructuredSelector({
	collections: selectCollectionForPreview,
});
const mapDispatch = (dispatch: Dispatch) => ({});
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface CollectionPreviewListProps extends PropsFromRedux {}

const CollectionPreviewList = connector(
	({ collections }: CollectionPreviewListProps) => (
		<>
			{collections.map(({ id, title, items }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))}
		</>
	)
);

export default CollectionPreviewList;

// {
// 	/* {Object.keys(collections).map((key: UrlParam) =>} */
// }
// {
// 	/* {Object.entries(collections).map(([key, value]) => (
// 				<CollectionPreview
// 					key={value.id}
// 					title={value.title}
// 					items={value.items}
// 				/>
// 			))} */
// }
// {
// 	/* {
// 				collections.map
// 			} */
// }
// {
// 	/* {collections.map(({ id, title, items, ...otherCollectionProps }) => ( */
// }
// {
// 	/* {collections.map(({ id, title, items }) => { */
// }
// {
// 	/* {collections.map(({ id, title, items }) => ( */
// }
// {
// 	/* {collections.map(({ id, title, items }) => ( */
// }
// {
// 	/* // <CollectionPreview key={id} displayItem={4} {...otherCollectionProps} />
// 				// <CollectionPreview key={id} title={title} items={...items} />
// 				// <CollectionPreview key={id} title={title} items={items} />
// 				<CollectionPreview key={id} title={title} items={items} /> */
// }
// {
// 	/* ))} */
// }

import React from 'react';
import './directory-menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
// import sections from '../../data/sections.data';

import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { selectSection } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
// import { useHistory, useRouteMatch, useLocation } from 'react-router';
import {
	// useHistory,
	// useRouteMatch,
	withRouter,
	RouteComponentProps,
} from 'react-router';

const mapState = createStructuredSelector({
	sections: selectSection,
});

const mapDispatch = (dispatch: Dispatch) => ({});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface DirectMenuProps extends PropsFromRedux, RouteComponentProps {}

const DirectoryMenu = connector(
	({ sections, history, match }: DirectMenuProps) => (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherSection }) => (
				<MenuItem
					key={id}
					{...otherSection}
					subtitle={'SHOP NOW'}
					handleClick={() => {
						console.log({ match: match, linkUrl: otherSection.linkUrl });
						const url = `${match.url}${otherSection.linkUrl}`;
						history.push(url);
					}}
				/>
			))}
		</div>
	)
);

// const DirectoryMenu = connector(
// 	({ sections, history, match }: DirectMenuProps) => {
// 		// const history = useHistory();
// 		// const match = useRouteMatch();
// 		// const location = useLocation();

// 		// console.log({ history, match, location });

// 		return (
// 			<div className='directory-menu'>
// 				{sections.map(({ id, ...otherSection }) => (
// 					<MenuItem
// 						key={id}
// 						{...otherSection}
// 						subtitle={'SHOP NOW'}
// 						handleClick={() => {
// 							console.log({ match: match.url, linkUrl: otherSection.linkUrl });
// 							const url = `${match.url}${otherSection.linkUrl}`;
// 							history.push(url);
// 						}}
// 					/>
// 				))}
// 			</div>
// 		);
// 	}
// );

export default withRouter(DirectoryMenu);

// interface DirectoryMenuProps extends RouteComponentProps {}
// interface DirectoryMenuProps extends PropsFromRedux {}
// interface DirectorMenuState {
// 	// sections: Section[];
// }

// class DirectoryMenu extends React.Component<
// 	DirectoryMenuProps,
// 	DirectorMenuState
// > {
// 	// constructor(props: DirectoryMenuProps) {
// 	// super(props);
// 	// this.state = { sections: sections };
// 	// console.log(this.props, this.state);
// 	// }

// 	render() {
// 		// const { sections } = this.state;
// 		const { sections } = this.props;

// 		return (
// 			<div className='directory-menu'>
// 				{sections.map(({ id, ...otherSections }) => (
// 					<MenuItem key={id} {...otherSections} subtitle={'SHOP NOW'} />
// 				))}
// 			</div>
// 		);
// 	}
// }

// export default connector(DirectoryMenu);

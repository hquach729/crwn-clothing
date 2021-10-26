import React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.styles.scss';

const sections = [
	{
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		id: 1,
		linkUrl: 'shop/hats',
	},
	{
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		id: 2,
		linkUrl: 'shop/jackets',
	},
	{
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		id: 3,
		linkUrl: 'shop/sneakers',
	},
	{
		title: 'women',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		size: 'large',
		id: 4,
		linkUrl: 'shop/women',
	},
	{
		title: 'men',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		size: 'large',
		id: 5,
		linkUrl: 'shop/men',
	},
];

export interface Section {
	id?: number;
	title?: string;
	imageUrl?: string;
	linkUrl?: string;
	size?: string;
}

// interface DirectoryMenuProps extends RouteComponentProps {}
interface DirectoryMenuProps {}
interface DirectorMenuState {
	sections: Section[];
}

class DirectoryMenu extends React.Component<
	DirectoryMenuProps,
	DirectorMenuState
> {
	constructor(props: DirectoryMenuProps) {
		super(props);
		this.state = { sections };
		console.log(this.props, this.state);
	}

	render() {
		const { sections } = this.state;
		// const { push } = this.props.history;

		return (
			<div className='directory-menu'>
				{/* {sections.map(({ id, title, imageUrl, size, linkUrl }) => ( */}
				{sections.map(({ id, ...otherSections }) => (
					<MenuItem key={id} {...otherSections} subtitle={'SHOP NOW'} />
				))}
			</div>
		);
	}
}

export default DirectoryMenu;

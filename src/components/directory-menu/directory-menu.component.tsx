import React from 'react';
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
		title: 'womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		size: 'large',
		id: 4,
		linkUrl: 'shop/womens',
	},
	{
		title: 'mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		size: 'large',
		id: 5,
		linkUrl: 'shop/mens',
	},
];

export interface Section {
	id?: number;
	title?: string;
	imageUrl?: string;
	linkUrl?: string;
	size?: string;
}

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
	}

	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, title, imageUrl, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default DirectoryMenu;

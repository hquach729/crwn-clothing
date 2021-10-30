import React from 'react';
import './directory-menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import sections from '../../data/sections.data';

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
		this.state = { sections: sections };
		// console.log(this.props, this.state);
	}

	render() {
		const { sections } = this.state;

		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...otherSections }) => (
					<MenuItem key={id} {...otherSections} subtitle={'SHOP NOW'} />
				))}
			</div>
		);
	}
}

export default DirectoryMenu;

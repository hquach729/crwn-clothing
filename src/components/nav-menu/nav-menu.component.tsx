import React from 'react';
import { NAV_ITEMS } from './nav-menu.config';
import './nav-menu.styles.scss';

import NavItem from '../nav-item/nav-item.component';

const NavMenu = () => (
	<div className='options'>
		{NAV_ITEMS.map((item, index) => (
			<NavItem key={index} {...item} />
		))}
	</div>
);
export default NavMenu;

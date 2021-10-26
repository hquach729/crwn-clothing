import React from 'react';
import './header.styles.scss';

import NavMenu from '../nav-menu/nav-menu.component';
import MenuLogo from '../menu-logo/menu-logo.component';

const Header = () => (
	<div className='header'>
		<MenuLogo />
		<NavMenu />
	</div>
);
export default Header;

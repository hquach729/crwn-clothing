import React from 'react';
import './header.styles.scss';

import {
	NavMenu,
	MenuLogo,
	NavItem,
	AuthNavItem,
	CartIcon,
	CartDropDown,
} from '../components';

export const Header = () => (
	<div className='header'>
		<MenuLogo />
		<NavMenu>
			<NavItem content='Shop' url='/shop' />
			<NavItem content='Contact' url='/contact' />
			<AuthNavItem />
			<CartIcon />
		</NavMenu>
		<CartDropDown />
	</div>
);

export default Header;

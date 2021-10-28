import React from 'react';
import './nav-menu.styles.scss';

interface NavMenuProps {
	children: React.ReactNode;
}

const NavMenu = ({ children }: NavMenuProps) => (
	<div className='options'>{children}</div>
);

export default NavMenu;

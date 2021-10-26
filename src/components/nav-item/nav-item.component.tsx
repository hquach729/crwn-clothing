import React from 'react';
import { Link } from 'react-router-dom';
import './nav-item.styles.scss';

interface NavItemProps {
	content: string;
	url: string;
}

const NavItem = ({ content, url }: NavItemProps) => (
	<Link className='option' to={url}>
		{content.toLocaleUpperCase()}
	</Link>
);

export default NavItem;

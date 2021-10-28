import React from 'react';
import { Link } from 'react-router-dom';
import './nav-item.styles.scss';

interface NavItemProps {
	content: string;
	url: string;
	handleClick?: () => void;
}

const NavItem = ({
	content,
	url,
	handleClick = (): void => {},
}: NavItemProps) => (
	<Link className='option' to={url} onClick={handleClick}>
		{content.toLocaleUpperCase()}
	</Link>
);

export default NavItem;

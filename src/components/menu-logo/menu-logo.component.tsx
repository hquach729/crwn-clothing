import React from 'react';
import { Link } from 'react-router-dom';
import './menu-logo.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const MenuLogo = () => (
	<Link className='logo-container' to='/'>
		<Logo className='logo' />
	</Link>
);

export default MenuLogo;

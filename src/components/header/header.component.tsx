// React
import React from 'react';
import './header.styles.scss';

// Components
import NavMenu from '../nav-menu/nav-menu.component';
import MenuLogo from '../menu-logo/menu-logo.component';
import NavItem from '../nav-item/nav-item.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

//  Firebase
import { auth } from '../../firebase/firebase.util';

// Redux
import { connector, HeaderProps } from './header.redux';

const Header = ({ currentUser, history }: HeaderProps) => (
	<div className='header'>
		<MenuLogo />
		<NavMenu>
			<NavItem content='Shop' url='/shop' />
			<NavItem content='Contact' url='/contact' />
			{currentUser ? (
				<NavItem
					content='Sign Out'
					url='/'
					handleClick={() => {
						auth.signOut();
						history.push('/');
					}}
				/>
			) : (
				<NavItem content='Sign In' url='/signin' />
			)}
			<CartIcon />
		</NavMenu>
		<CartDropDown />
	</div>
);

export default connector(Header);

// React
import React from 'react';
import './header.styles.scss';

// Components
import NavMenu from '../nav-menu/nav-menu.component';
import MenuLogo from '../menu-logo/menu-logo.component';
import NavItem from '../nav-item/nav-item.component';

//  Firebase
import type { User } from 'firebase/auth';
import { auth } from '../../firebase/firebase.util';

import { withRouter } from 'react-router-dom';
import type { RouteComponentProps } from 'react-router-dom';

import type { DocumentData } from 'firebase/firestore';
interface HeaderProps extends RouteComponentProps {
	// currentUser?: User;
	currentUser?: DocumentData;
}

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
		</NavMenu>
	</div>
);
export default withRouter(Header);

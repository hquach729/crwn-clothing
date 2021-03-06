import React from 'react';
import './auth-nav.styles.scss';

import { AuthNavProps, connectorReduxWithRouter } from './auth-nav.redux';
import { auth } from '../../firebase/firebase.util';
import NavItem from '../nav-item/nav-item.component';

export const AuthNavItem = connectorReduxWithRouter(
	({ currentUser, history, handleClick }: AuthNavProps) => (
		<div className='auth-nav-link'>
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
		</div>
	)
);

export default AuthNavItem;

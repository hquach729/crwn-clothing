// React
import React from 'react';
import './header.styles.scss';

// Components
import NavMenu from '../nav-menu/nav-menu.component';
import MenuLogo from '../menu-logo/menu-logo.component';
import NavItem from '../nav-item/nav-item.component';

//  Firebase
import { auth } from '../../firebase/firebase.util';
import { withRouter } from 'react-router-dom';
import type { RouteComponentProps } from 'react-router-dom';
import type { DocumentData } from 'firebase/firestore';

// Redux
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';

interface HeaderProps extends RouteComponentProps {
	currentUser?: DocumentData | null;
}

const Header = ({ currentUser, history }: HeaderProps) => {
	// console.log('Header state:', currentUser);
	return (
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
};

const mapStateToProps = (state: RootState) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(withRouter(Header));

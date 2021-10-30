// React
import React from 'react';

// Routing
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Header Component
import Header from './components/header/header.component';

// Page Component
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import type { User, Unsubscribe } from 'firebase/auth';

import { DocumentData } from 'firebase/firestore';
interface AppProps {}
interface AppState {
	currentUser?: DocumentData | null;
}

export class App extends React.Component<AppProps, AppState> {
	unsubscribeFromAuth: Unsubscribe | null;

	constructor(props: AppProps) {
		super(props);
		this.unsubscribeFromAuth = null;
		this.state = {
			currentUser: null,
		};
	}

	signIn = async (userAuth: User) => {
		const { docSnap } = await createUserProfileDocument(userAuth);

		this.setState({ currentUser: { id: docSnap.id, ...docSnap.data() } }, () =>
			console.log('User sign in', this.state)
		);
	};
	signOut = (userAuth: User | null) => {
		this.setState({ currentUser: userAuth }, () =>
			console.log('User sign out', this.state)
		);
	};

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			userAuth ? this.signIn(userAuth) : this.signOut(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth = null;
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div className='app'>
				<Header currentUser={currentUser!} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;

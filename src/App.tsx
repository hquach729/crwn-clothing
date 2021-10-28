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
import { auth } from './firebase/firebase.util';
import type { User, Unsubscribe } from 'firebase/auth';

interface AppProps {}
interface AppState {
	currentUser?: User | null;
}

export class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	// Class properties
	unsubscribeFromAuth: Unsubscribe | null = null;

	/**
	 * Each time we launch our browser, this will check if the user login status
	 * Whenever there is a change on firebase, this subscription will get the new updates
	 */
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			console.log({ user });
			this.setState({ currentUser: user }, () =>
				console.log(this.state.currentUser)
			);
		});
	}

	/**
	 * Unsubscribe from firebase update, so we don't have memory leak
	 */
	componentWillUnmount() {
		if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
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

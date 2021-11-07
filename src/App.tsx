// React
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, signOutUser } from './redux/user/user.actions';
import { CurrentUser } from './redux/user/user.types';

// Routing
// import { Switch, Route, Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Header Component
import Header from './components/header/header.component';

// Page Component
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import type { User, Unsubscribe } from 'firebase/auth';
import { Dispatch } from 'redux';
import { RootState } from './redux/store';

// State selector
import { selectCurrentUser } from './redux/user/user.selectors';

interface AppProps {
	currentUser: CurrentUser;
	setCurrentUser: any;
	signOutUser: any;
}

interface AppState {}

export class App extends React.Component<AppProps, AppState> {
	unsubscribeFromAuth: Unsubscribe | null;

	constructor(props: AppProps) {
		super(props);
		this.unsubscribeFromAuth = null;
	}

	componentDidMount() {
		// This will continue to run on the background listening for update from google
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			console.log('receive state change', { userAuth });
			userAuth ? this.signIn(userAuth) : this.signOut(userAuth);
			// userAuth ? this.signIn(userAuth) : this.props.signOutUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth = null;
	}

	signIn = async (userAuth: User) => {
		const { setCurrentUser } = this.props;
		// Either create new user profile or return a the current profile that exist on firebase
		const { docSnap } = await createUserProfileDocument(userAuth);
		// console.log(docSnap.id, docSnap.data());
		console.log(docSnap.data());
		setCurrentUser({ id: docSnap.id, ...docSnap.data() });
	};

	signOut = (userAuth: null) => {
		const { setCurrentUser } = this.props;
		setCurrentUser(userAuth);
	};

	render() {
		return (
			<div className='app'>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					{/* <Route exact path='/shop' component={ShopPage} /> */}
					<Route exact path='/signin' component={SignInAndSignUpPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setCurrentUser: (user: CurrentUser) => dispatch(setCurrentUser(user)),
	signOutUser: (user: CurrentUser) => dispatch(signOutUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

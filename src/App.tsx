// React
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { CurrentUser } from './redux/user/user.types';

// Routing
import { Switch, Route, Redirect } from 'react-router-dom';
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
import { Dispatch } from 'redux';
import { RootState } from './redux/store';

interface AppProps {
	currentUser: CurrentUser;
	setCurrentUser: any;
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

	signOut = (userAuth: User | null) => {
		const { setCurrentUser } = this.props;
		setCurrentUser(userAuth);
	};

	render() {
		// console.log('render', this.props.currentUser);
		return (
			<div className='app'>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					{/* <Route exact path='/signin' component={SignInAndSignUpPage} /> */}
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }: RootState) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setCurrentUser: (user: CurrentUser) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

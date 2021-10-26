import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { RouteComponentProps } from 'react-router-dom';
import './App.css';

// Header Component
import Header from './components/header/header.component';

// Page Component
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const SneakersPage = ({
// 	history,
// 	location,
// 	match,
// 	staticContext,
// }: RouteComponentProps) => {
// 	return (
// 		<div className='sneakers-page'>
// 			<button onClick={() => history.push('/')}>HomePage</button>
// 			<h1>Sneakers Page</h1>
// 		</div>
// 	);
// };
// const WomensPage = ({
// 	history,
// 	location,
// 	match,
// 	staticContext,
// }: RouteComponentProps) => {
// 	return (
// 		<div className='women-page'>
// 			<button onClick={() => history.push('/')}>HomePage</button>
// 			<h1>Women Page</h1>
// 		</div>
// 	);
// };
// const MensPage = ({
// 	history,
// 	location,
// 	match,
// 	staticContext,
// }: RouteComponentProps) => {
// 	return (
// 		<div className='women-page'>
// 			<button onClick={() => history.push('/')}>HomePage</button>
// 			<h1>Men Page</h1>
// 		</div>
// 	);
// };

const App = () => (
	<div className='app'>
		<Header />
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/shop' component={ShopPage} />
		</Switch>
	</div>
);

export default App;

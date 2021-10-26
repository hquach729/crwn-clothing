import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import './App.css';

// Custom Component
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hats-page/hats-page.component';
import JacketsPage from './pages/jackets-page/jackets-page.component';

const SneakersPage = ({
	history,
	location,
	match,
	staticContext,
}: RouteComponentProps) => {
	return (
		<div className='sneakers-page'>
			<button onClick={() => history.push('/')}>HomePage</button>
			<h1>Sneakers Page</h1>
		</div>
	);
};
const WomenPage = ({
	history,
	location,
	match,
	staticContext,
}: RouteComponentProps) => {
	return (
		<div className='women-page'>
			<button onClick={() => history.push('/')}>HomePage</button>
			<h1>Women Page</h1>
		</div>
	);
};
const MenPage = ({
	history,
	location,
	match,
	staticContext,
}: RouteComponentProps) => {
	return (
		<div className='women-page'>
			<button onClick={() => history.push('/')}>HomePage</button>
			<h1>Men Page</h1>
		</div>
	);
};

const App = () => (
	<Switch>
		<Route exact path='/' component={HomePage} />
		<Route exact path='/shop/hats' component={HatsPage} />
		<Route exact path='/shop/jackets' component={JacketsPage} />
		<Route exact path='/shop/sneakers' component={SneakersPage} />
		<Route exact path='/shop/women' component={WomenPage} />
		<Route exact path='/shop/men' component={MenPage} />
	</Switch>
);

export default App;

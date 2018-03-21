import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Layout from './hoc/layout/layout';
import BurgerBuilder from './containers/burgerbuilder/burgerbuilder';
import Checkout from './containers/checkout/checkout';

class App extends Component {
	render() {
		return (
			<div>
			<Layout>
			<Switch>
			<Route path='/' exact component={BurgerBuilder} />
			<Route path='/checkout' component={Checkout} />
			</Switch>
			</Layout>
			</div>
			);
	}
}

export default App;

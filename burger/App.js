import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './hoc/layout/layout';
import BurgerBuilder from './containers/burgerbuilder/burgerbuilder';
import Checkout from './containers/checkout/checkout';
import Orders from './containers/orders/orders';

class App extends Component {
	render() {
		return (
			<div>
			<Layout>
			<Switch>
			<Route path='/' exact component={BurgerBuilder} />
			<Route path='/checkout' component={Checkout} />
			<Route path='/orders' component={Orders} />
			</Switch>
			</Layout>
			</div>
			);
	}
}

export default App;

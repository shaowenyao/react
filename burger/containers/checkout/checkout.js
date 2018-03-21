import React, {Component} from 'react';
import CheckoutSummary from '../../components/order/checkoutsummary/checkoutsummary';
import { Route } from 'react-router-dom';
import ContactData from './contactdata/contactdata';

class checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			bacon: 1,
			salad: 1
		}
	}

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
		}
		this.setState({ingredients: ingredients});
	}

	checkoutCancelledHanlder = () => {
		this.props.history.goBack();
	}
	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}
	render() {
		return (
			<div>
			<CheckoutSummary ingredients={this.state.ingredients} 
			checkoutCancelled={this.checkoutCancelledHanlder} 
			checkoutContinued={this.checkoutContinuedHandler} />
			<Route path={this.props.match.path + '/contact-data'} component={ContactData} />
			</div>
			);
	}
}

export default checkout;
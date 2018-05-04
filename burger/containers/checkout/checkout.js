import React, {Component} from 'react';
import CheckoutSummary from '../../components/order/checkoutsummary/checkoutsummary';
import { Redirect, Route } from 'react-router-dom';
import ContactData from './contactdata/contactdata';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class checkout extends Component {
	state = {
		ingredients: null,
		price: 0
	}

	componentWillMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price =0;
		for (let param of query.entries()) {
			if (param[0] === 'price') { 
				price = param[1];
			} else {
				ingredients[param[0]] = +param[1];
			}
		}
		this.setState({ingredients: ingredients, totalPrice:price});
	}

	checkoutCancelledHanlder = () => {
		this.props.history.goBack();
	}
	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}
	render() {
		let summary = <Redirect to="/" />
		if  (this.props.ings) {
			const purchasedRedirect = this.props.purchased ?  <Redirect to="/" /> : null;
			summary = (
				<div>
				{purchasedRedirect}
				<CheckoutSummary 
				ingredients={this.props.ings} 
				checkoutCancelled={this.checkoutCancelledHanlder} 
				checkoutContinued={this.checkoutContinuedHandler} />
				<Route path={this.props.match.path + '/contact-data'} component={ContactData} />
				</div>
				);
		}
		return summary;	
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		purchased: state.order.purchased
	}
};


export default connect(mapStateToProps)(checkout);
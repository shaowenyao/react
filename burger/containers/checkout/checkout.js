import React, {Component} from 'react';
import CheckoutSummary from '../../components/order/checkoutsummary/checkoutsummary';
import { Route } from 'react-router-dom';
import ContactData from './contactdata/contactdata';
import { connect } from 'react-redux';

class checkout extends Component {

	checkoutCancelledHanlder = () => {
		this.props.history.goBack();
	}

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}
	render() {
		return (
			<div>
			<CheckoutSummary ingredients={this.props.ings} 
			checkoutCancelled={this.checkoutCancelledHanlder} 
			checkoutContinued={this.checkoutContinuedHandler} />
			<Route path={this.props.match.path + '/contact-data'} component={ContactData} />
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients
	}
};

export default connect(mapStateToProps)(checkout);
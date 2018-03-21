import React, {Component} from 'react';
import CheckoutSummary from '../../components/order/checkoutsummary/checkoutsummary';

class checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			bacon: 1,
			salad: 1
		}
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
			<CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelledHanlder} checkoutContinued={this.checkoutContinuedHandler} />
			</div>
			);
	}
}

export default checkout;
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
	render() {
		return (
			<div>
			<CheckoutSummary ingredients={this.state.ingredients} />
			</div>
			);
	}
}

export default checkout;
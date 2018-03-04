import React from 'react';
import Auxdiv from "../../../hoc/auxdiv";
import Button from '../../UI/button/button';

const ordersummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
	.map(igKey => {
		return <li key={igKey} ><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>;
	});
	return (
		<Auxdiv>
		<h3>Your Order</h3>
		<p>Your burger includes </p>
		<ul>
		{ingredientSummary}
		</ul>
		<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
		<p>Continue to Checkout?</p>
		<Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
		<Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
		</Auxdiv>
		);
}

export default ordersummary;
import React from 'react';
import Auxdiv from "../../../hoc/auxdiv";

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
		<p>Continue to Checkout?</p>
		</Auxdiv>
		);
}

export default ordersummary;
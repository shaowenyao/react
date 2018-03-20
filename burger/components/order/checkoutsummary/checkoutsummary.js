import React from 'react';
import Burger from '../../burger/burger';
import Button from '../../UI/button/button';
import classes from './checkoutsummary.css';

const checkoutSummary = (props) => {
	return(
		<div className>
		<h1>Thanks forn your patronage!</h1>
		<div style={{width: '300px', height: '300px', margin: 'auto' }}>
		<Burger ingredients={props.ingredients} > {props.children}</Burger>
		<Button btyntype="Danger" clicked> CANCEL</Button>
		<Button btntype="Success" clicked>CONTINUE</Button>
		</div>
		</div>
		)
}

export default checkoutSummary;
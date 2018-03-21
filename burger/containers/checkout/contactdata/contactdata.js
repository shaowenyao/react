import React, {Component} from 'react';
import Button from "../../../components/UI/button/button";
import classes from './contactdata.css'

class contactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		}
	}

	render () {
		return (
			<div className={classes.ContactData}>
			<h4>Enter your contact data</h4>
			<form>
			<input type="text" name="name" placeholder="Your Name" />
			<input type="email" name="email" placeholder="Your Email" />
			<input type="text" name="street" placeholder="Street" />
			<input type="text" name="postal" placeholder="Postal Code" />
			<Button btnType="Success" >ORDER</Button>
			</form>
			</div>
			);

	}
}

export default contactData;
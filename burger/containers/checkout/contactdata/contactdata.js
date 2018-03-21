import React, {Component} from 'react';
import Button from "../../../components/UI/button/button";
import classes from './contactdata.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/spinner';
import Input from '../../../components/UI/input/input';

class contactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({loading:true})
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'testname',
				address: {
					street: 'testst',
					zipCode: '92331',
					country: 'Germany'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		}
		axios.post('/orders.json', order)
		.then( reponse => {
			this.setState({loading:false });
			this.props.history.push('/');
		})
		.catch( errpr => {
			this.setState({ loading:false });
		});
	}

	render () {
		let form = (
			<form>
			<Input inputtype="input" type="text" name="name" placeholder="Your Name" />
			<Input inputtype="input" type="email" name="email" placeholder="Your Email" />
			<Input inputtype="input" type="text" name="street" placeholder="Street" />
			<Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
			<Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
			</form>
			);
		if (this.state.loading) { 
			form = <Spinner />;
		}
		return (
			<div className={classes.ContactData}>
			<h4>Enter your contact data</h4>
			{form}
			</div>
			);

	}
}

export default contactData;
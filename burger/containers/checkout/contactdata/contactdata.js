import React, {Component} from 'react';
import Button from "../../../components/UI/button/button";
import classes from './contactdata.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/spinner';
import Input from '../../../components/UI/input/input';

class contactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name'
				},
				value: ''
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: ''
			},
			zipcode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code'
				},
				value: ''
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country'
				},
				value: ''
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Email'
				},
				value: ''
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
					{value: 'fastest', displayValue: 'Fastest'},
					{value: 'cheapest', displayValue: 'Cheapest'}
					]
				},
				value: ''
			}
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({loading:true})
		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData
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


	inputChangedHanlder = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedFormElement = { 
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		this.setState({orderForm: updatedOrderForm});
	}
	render () {
		const formElementsArray = [];
		for ( let key in this.state.orderForm) {
			formElementsArray.push( {
				id:key,
				config: this.state.orderForm[key]
			});
		}
		let form = (
			<form onSubmit={this.orderHandler} >
			{formElementsArray.map(formElement => (
				<Input 
				key={formElement.id}
				elementType= {formElement.config.elementType} 
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				changed={(event) => this.inputChangedHanlder(event, formElement.id)} />
				))}
			<Button btnType="Success" >ORDER</Button>
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
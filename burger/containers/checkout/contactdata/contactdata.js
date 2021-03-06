import React, {Component} from 'react';
import Button from "../../../components/UI/button/button";
import classes from './contactdata.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/spinner';
import Input from '../../../components/UI/input/input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

class contactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touch: false
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touch: false
			},
			zipcode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5
				},
				valid: false,
				touch: false
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touch: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Email'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touch: false
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
					{value: 'fastest', displayValue: 'Fastest'},
					{value: 'cheapest', displayValue: 'Cheapest'}
					]
				},
				value: 'fastest',
				validation: {},
				valid: true,
			}
		},
		formIsValid: false, 
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
		}
		const order = {
			ingredients: this.props.ings,
			price: this.props.price,
			orderData: formData
		}
		this.props.onOrderBurger(order);
	}

	checkValidity( value, rules) {
		let isValid = true; 

		if(rules.required) { 
			isValid = value.trim() !== '' && isValid;
		}
		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}
		return isValid;
	}

	inputChangedHanlder = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedFormElement = { 
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
		updatedFormElement.touched=true;
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		let formIsValid=true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid });
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
				invalid={!formElement.config.valid}
				shouldValidate = { formElement.config.validation}
				touched={formElement.config.touched}
				changed={(event) => this.inputChangedHanlder(event, formElement.id)} />
				))}
			<Button btnType="Success" disabled={!this.state.formIsValid} >ORDER</Button>
			</form>
			);
		if (this.props.loading) { 
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

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		loading: state.order.loading
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(contactData,axios));
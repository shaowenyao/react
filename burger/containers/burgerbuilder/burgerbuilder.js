import React, {Component} from 'react';
import Auxdiv from '../../hoc/auxdiv/auxdiv';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildcontrols/buildcontrols';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/ordersummary/ordersummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {
	state = {
		purchasing: false,
		loading: false,
		error: null
	}

	componentDidMount () {
		console.log(this.props);
		/*axios.get('https://react-my-burger-7f72c.firebaseio.com/ingredients.json')
		.then (response => {
			this.setState({ingredients:response.data});
		})
		.catch ( error => {
			this.setState({error:true})
		}); */
	}
	updatePurchaseState (ingredients) {
		const sum = Object.keys(ingredients)
		.map(igKey => {
			return ingredients[igKey];
		})
		.reduce((sum, el) => {
			return sum + el;
		}, 0);
		return sum>0;
	}
	

	purchaseHandler = () => {
		this.setState( { purchasing: true });
	}

	purchaseCancelHander = () => {
		this.setState({ purchasing: false});
	}

	purchaseContinueHandler = () => {
		this.props.history.push('/checkout');
	}
	render () {
		const disabledInfo = { ...this.props.ings }
		for (let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		let orderSummary = null;
		let burger = this.state.error ? <p>Ingredients cannot be loaded</p> :  <Spinner />;
		if (this.props.ings) {
			burger = (
				<Auxdiv>
				<Burger ingredients={this.props.ings} />
				<BuildControls
				ingredientAdded={this.props.onIngredientAdded} 
				ingredientRmoved = { this.props.onIngredientRemoved} 
				disabled={disabledInfo} 
				purchaseable={this.updatePurchaseState(this.props.ings)}
				ordered={this.purchaseHandler}
				price = {this.props.price}
				/>
				</Auxdiv>
				);
			orderSummary = <OrderSummary ingredients={this.props.ings} purchaseCancelled={this.purchaseCancelHander} purchaseContinued={this.purchaseContinueHandler} price={this.props.price}/>
		}
		if ( this.state.loading  ) {
			orderSummary = <Spinner />;
		}
		return(
			<Auxdiv>
			<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHander}> {orderSummary} </Modal>
			{ burger }
			</Auxdiv>
			);
	};
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients,
		price: state.totalPrice
	};
}
const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: (ingName) => dispatch ({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
		onIngredientRemoved: (ingName) => dispatch ({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
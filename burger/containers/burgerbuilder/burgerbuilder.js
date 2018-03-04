import React, {Component} from 'react';
import Auxdiv from '../../hoc/auxdiv';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildcontrols/buildcontrols';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/ordersummary/ordersummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchaseable: false,
		purchasing: false
	}

	updatePurchaseState (ingredients) {
		const sum = Object.keys(ingredients)
		.map(igKey => {
			return ingredients[igKey];
		})
		.reduce((sum, el) => {
			return sum + el;
		}, 0);
		this.setState({ purchaseable: sum>0});
	}
	
	addIngredientHanlder = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount +1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type]=updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHanlder = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <=0) { return; }
		const updatedCount = oldCount -1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type]=updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	}

	purchaseHandler = () => {
		this.setState( { purchasing: true });
	}

	purchaseCancelHander = () => {
		this.setState({ purchasing: false});
	}

	render () {
		const disabledInfo = { ...this.state.ingredients }
		for (let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return(
			<Auxdiv>
			<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHander}>
			<OrderSummary ingredients={this.state.ingredients} />
			</Modal>
			<Burger ingredients={this.state.ingredients} />
			<BuildControls
			ingredientAdded={this.addIngredientHanlder} 
			ingredientRmoved = { this.removeIngredientHanlder} 
			disabled={disabledInfo} 
			purchaseable={this.state.purchaseable}
			ordered={this.purchaseHandler}
			price = {this.state.totalPrice}
			/>
			</Auxdiv>
			);
	};
}

export default BurgerBuilder;
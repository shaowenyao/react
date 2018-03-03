import React, {Component} from 'react';
import Auxdiv from '../../hoc/auxdiv';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildcontrols/buildcontrols';

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
		totalPrice: 4
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
	}

	removeIngredientHanlder = (type) => {


	}
	render () {
		return(
			<Auxdiv>
			<Burger ingredients={this.state.ingredients} />
			<BuildControls
			ingredientAdded={this.addIngredientHanlder} />
			</Auxdiv>
			);
	};
}

export default BurgerBuilder;
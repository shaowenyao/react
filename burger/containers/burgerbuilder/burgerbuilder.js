import React, {Component} from 'react';
import Auxdiv from '../../hoc/auxdiv/auxdiv';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildcontrols/buildcontrols';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/ordersummary/ordersummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
		loading: false,
		error: null
	}

	componentDidMount () {
		console.log(this.props);
		axios.get('https://react-my-burger-7f72c.firebaseio.com/ingredients.json')
		.then (response => {
			this.setState({ingredients:response.data});
		})
		.catch ( error => {
			this.setState({error:true})
		}); 
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

	purchaseContinueHandler = () => {
		//alert("continue");
		
		const queryParams = [];
		for (let i in this.state.ingredients){
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		queryParams.push('price=' + this.state.totalPrice);
		const queryString = queryParams.join('&');
		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		});
	}
	render () {
		const disabledInfo = { ...this.state.ingredients }
		for (let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		let orderSummary = null;
		let burger = this.state.error ? <p>Ingredients cannot be loaded</p> :  <Spinner />;
		if (this.state.ingredients) {
			burger = (
				<Auxdiv>
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
			orderSummary = <OrderSummary ingredients={this.state.ingredients} purchaseCancelled={this.purchaseCancelHander} purchaseContinued={this.purchaseContinueHandler} price={this.state.totalPrice}/>
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

export default withErrorHandler(BurgerBuilder, axios);
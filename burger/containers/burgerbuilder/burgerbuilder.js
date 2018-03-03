import React, {Component} from 'react';
import Auxdiv from '../../hoc/auxdiv';
import Burger from '../../components/burger/burger'

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		}
	}
	render () {
		return(
			<Auxdiv>
			<Burger ingredients={this.state.ingredients} />
			<div>Build Controls </div>
			</Auxdiv>
			);
	};
}

export default BurgerBuilder;
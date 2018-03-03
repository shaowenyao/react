import React, {Component} from 'react';
import Auxdiv from '../../hoc/auxdiv';
import Burger from '../../components/burger/burger'

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 1,
			bacon: 1,
			cheese: 2,
			meat: 2
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
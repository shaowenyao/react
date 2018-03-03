import React, {Component} from 'react';
import Auxdiv from '../../hoc/auxdiv';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildcontrols/buildcontrols';

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
			<BuildControls />
			</Auxdiv>
			);
	};
}

export default BurgerBuilder;
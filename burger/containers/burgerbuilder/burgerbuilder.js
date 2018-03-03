import React, {Component} from 'react';
import Auxdiv from '../../hoc/auxdiv';
import Burger from '../../components/burger/burger'

class BurgerBuilder extends Component {
	render () {
		return(
			<Auxdiv>
			<Burger />
			<div>Build Controls </div>
			</Auxdiv>
			);
	};
}

export default BurgerBuilder;
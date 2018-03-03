import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './burgeringredient/burgeringredient';

const burger = (props) => {
	const transformedIngredients = Object.keys(props.ingredients)
	.map( igKey => {
		return [...Array( props.ingredients[igKey] )].map((_, i) => {
			return <BurgerIngredient key={igKey+i} type={igKey} />
		});
	});
	return (
		<div className={classes.Burger}>
		<BurgerIngredient type ="bread-top" />
		{transformedIngredients}
		<BurgerIngredient type ="bread-bottom" />
		</div>
		);
}

export default burger;
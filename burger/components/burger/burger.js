import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './burgeringredient/burgeringredient';

const burger = (props) => {
	return (
		<div className={classes.Burger}>
		<BurgerIngredient type ="bread-top" />
		<BurgerIngredient type ="meat" />
		<BurgerIngredient type ="cheese" />
		<BurgerIngredient type ="bread-bottom" />
		</div>
		);
}

export default burger;
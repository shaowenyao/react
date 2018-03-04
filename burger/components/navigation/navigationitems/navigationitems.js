import React from 'react';
import classes from './navigationitems.css';
import NavigationItem from './navigationitem/navigationitem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems} >
	<NavigationItem link='/' active={true} >Burger Builder</NavigationItem>
	<NavigationItem link='/'>Checkout</NavigationItem>
	</ul>
	);

export default navigationItems;


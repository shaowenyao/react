import React from 'react';
import classes from './navigationitems.css';
import NavigationItem from './navigationitem/navigationitem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems} >
	<NavigationItem link='/' exact>Burger Builder</NavigationItem>
	<NavigationItem link='/orders'>Orders</NavigationItem>
	</ul>
	);

export default navigationItems;


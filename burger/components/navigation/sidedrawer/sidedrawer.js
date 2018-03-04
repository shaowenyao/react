import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationitems/navigationitems';
import classes from './sidedrawer.css';

const sideDrawer = (props) => {
	return (
		<div className={classes.sideDrawer} >
		<Logo />
		<nav><NavigationItems /></nav>
		</div>
		);
}


export default sideDrawer;
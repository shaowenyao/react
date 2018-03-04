import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationitems/navigationitems';
import classes from './sidedrawer.css';
import Backdrop from '../../UI/backdrop/backdrop';
import Auxdiv from '../../../hoc/auxdiv';

const sideDrawer = (props) => {
	return (
		<Auxdiv>
		<div className={classes.sideDrawer} >
		<div className={classes.Logo}>
		<Logo />
		</div>
		<nav><NavigationItems /></nav>
		</div>
		</Auxdiv>
		);
}

export default sideDrawer;
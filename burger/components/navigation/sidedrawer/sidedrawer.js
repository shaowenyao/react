import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationitems/navigationitems';
import classes from './sidedrawer.css';
import Backdrop from '../../UI/backdrop/backdrop';
import Auxdiv from '../../../hoc/auxdiv/auxdiv';

const sideDrawer = ( props ) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<Auxdiv>
		<Backdrop show={props.open} clicked={props.closed}/>
		<div className={attachedClasses.join(' ')}>
		<div className={classes.Logo}>
		<Logo />
		</div>
		<nav>
		<NavigationItems />
		</nav>
		</div>
		</Auxdiv>
		);
	};

	export default sideDrawer;
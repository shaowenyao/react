import React from 'react';
import classes from './toolbar.css'
import Logo from '../../logo/logo';

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
		<div>MENU</div>
		<Logo />
		<nav>
		...
		</nav>
		</header>
		);
}

export default toolbar;


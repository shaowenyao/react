import React from 'react';
import Auxdiv from "../../hoc/auxdiv";
import classes from './layout.css';

const layout = (props) => (
	<Auxdiv>
	<div>Toolbar, SideDrawer, Backdrop</div>
	<main className={classes.Content}>
	{props.children}
	</main>
	</Auxdiv>
	);

	export default layout;
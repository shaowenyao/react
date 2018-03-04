import React from 'react';
import Auxdiv from "../../hoc/auxdiv";
import classes from './layout.css';
import Toolbar from '../navigation/toolbar/toolbar';
import SideDrawer from '../navigation/sidedrawer/sidedrawer';

const layout = (props) => (
	<Auxdiv>
	<Toolbar />
	<SideDrawer />
	<main className={classes.Content}>
	{props.children}
	</main>
	</Auxdiv>
	);

export default layout;
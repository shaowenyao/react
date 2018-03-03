import React from 'react';
import Auxdiv from "../../hoc/auxdiv";

const layout = (props) => (
	<Auxdiv>
	<div>Toolbar, SideDrawer, Backdrop</div>
	<main>
	{props.children}
	</main>
	</Auxdiv>
	);

export default layout;
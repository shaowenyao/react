import React from 'react';
import classes from './buildcontrols.css';
import BuildControl from './buildcontrol/buildcontrol';

const controls = [
{ label: 'Salad', type: 'salad' },
{ label: 'Bacon', type: 'bacon' },
{ label: 'Cheese', type: 'cheese' },
{ label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (

	<div className={classes.BuildControls}>
	{controls.map( ctrl =>(
		<BuildControl 
		key={ctrl.label} 
		label={ctrl.label} 
		added={() => props.ingredientAdded(ctrl.type)} 
		removed={() => props.ingredientRmoved(ctrl.type)} 
		disabled={props.disabled[ctrl.type]} />
		))}
	</div>
	);

export default buildControls;


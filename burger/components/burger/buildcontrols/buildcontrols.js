import React from 'react';
import classes from './buildcontrols.css';
import BuildControl from './buildcontrol/buildcontrol';

const controls = [
{ label: 'Salad', type: 'salad' },
{ label: 'Bacon', type: 'Bacon' },
{ label: 'Cheese', type: 'cheese' },
{ label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
		{controls.map( ctrl =>
			<BuildControl key={ctrl.label} label={ctrl.label} />
			)}
		</div>
		);
}

export default buildControls;
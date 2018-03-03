import React from 'react';
import classes from './buildcontrol.css';

const buildControl = (props) => {
	return (
		<div className={classes.BuildControl}>
		<div className={classes.Label}>{ props.label}</div>
		<button className={classes.Les}>Less</button>
		<button className={classes.More}>More</button>
		</div>
		);
}

export default buildControl;
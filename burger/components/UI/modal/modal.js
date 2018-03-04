import React from 'react';
import classes from './modal.css';
import Auxdiv from '../../../hoc/auxdiv';
import Backdrop from '../backdrop/backdrop';

const modal = (props) => {
	return (
		<Auxdiv>
		<Backdrop show = {props.show} clicked={props.modalClosed} />
		<div className={classes.Modal}
		style={{
			transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
			opacity: props.show ? '1': '0'
		}}>
		{props.children}
		</div>
		</Auxdiv>
		);
}

export default modal;
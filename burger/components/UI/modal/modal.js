import React, {Component} from 'react';
import classes from './modal.css';
import Auxdiv from '../../../hoc/auxdiv/auxdiv';
import Backdrop from '../backdrop/backdrop';

class modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}

	render () {
		return (
			<Auxdiv>
			<Backdrop show = {this.props.show} clicked={this.props.modalClosed} />
			<div className={classes.Modal}
			style={{
				transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: this.props.show ? '1': '0'
			}}>
			{this.props.children}
			</div>
			</Auxdiv>
			);
	}
}
export default modal;
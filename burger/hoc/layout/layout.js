import React, {Component} from 'react';
import Auxdiv from "../auxdiv/auxdiv";
import classes from './layout.css';
import Toolbar from '../../components/navigation/toolbar/toolbar';
import SideDrawer from '../../components/navigation/sidedrawer/sidedrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}
	sideDrawerClosedHanlder = () => {
		this.setState({showSideDrawer: false})
	}
	sideDrawerToggleHandler = () => {
		this.setState( ( prevState ) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	}
	render () {
		return (
			<Auxdiv>
			<Toolbar drawerToogleClicked={this.sideDrawerToggleHandler} />
			<SideDrawer open={this.state.showSideDrawer } closed={this.sideDrawerClosedHanlder} />
			<main className={classes.Content}>
			{this.props.children}
			</main>
			</Auxdiv>
			);
	}
}

export default Layout;
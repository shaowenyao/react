import React, {Component} from 'react';
import Modal from '../../components/UI/modal/modal';
import Auxdiv from '../auxdiv/auxdiv';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		}

		componentWillMount () {
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({error: null});
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(res => res, error => {
				this.setState({error: error});
			});
		}

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.request.eject(this.resInterceptor);
			console.log("Unmounted: " + this.reqInterceptor + " ," + this.resInterceptor);
		}
		
		errorConfirmedHandler = () => {
			this.setState({error: null});
		}

		render () {
			return (
				<Auxdiv>
				<Modal 
				show={this.state.error}
				modalClosed={this.errorConfirmedHandler}>
				{this.state.error ? this.state.error.message : null}
				</Modal>
				<WrappedComponent {...this.props} />
				</Auxdiv>
				);
			}
		}
	}

	export default withErrorHandler;
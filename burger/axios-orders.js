import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-7f72c.firebaseio.com/'
});

export default instance;
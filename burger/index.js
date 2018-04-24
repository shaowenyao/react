import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
<<<<<<< HEAD
import { createStore } from 'redux';

=======
=======
>>>>>>> parent of b10552e... burger redux extension
import { createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
>>>>>>> parent of b10552e... burger redux extension
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();

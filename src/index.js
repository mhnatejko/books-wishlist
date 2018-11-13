import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Routing from './Routing';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import reducer from './redux/reducers';
//import './index.css';

const store = createStore(
	reducer,
	compose( 
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Routing />
	</ Provider>, document.getElementById('root'));
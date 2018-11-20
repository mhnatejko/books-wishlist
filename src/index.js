import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Routing from './Routing';
import reducer from './redux/reducers';
import './styles/index.scss';

const store = createStore(
	reducer,
	compose( 
		applyMiddleware(thunk),
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Routing />
	</ Provider>, document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import * as serviceWorker from './serviceWorker';

import base_books from './exampleResponseData/respExample';
import fetcher from './GR_test';

console.log(base_books)

//fetcher('335598', true)

const store = createStore(
	reducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<Routing />
	</ Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



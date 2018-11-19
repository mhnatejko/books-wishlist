import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import AuthorDetails from './AuthorDetails';
import Browser from './Browser';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import LeftBar from './LeftBar';
import NoMatch from './NoMatch'; 
import WishList from './WishList';

const Routing = () => {
	return (
		<BrowserRouter>
			<div className='content'>
				<Header />					
				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
					<Route path={`${process.env.PUBLIC_URL}/browser`} component={Browser}/>
					<Route path={`${process.env.PUBLIC_URL}/wish-list`} component={WishList}/>
					<Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
					<Route path={`${process.env.PUBLIC_URL}/author`} component={AuthorDetails}/>
					<Route component={NoMatch}/>                
				</Switch>
				<LeftBar />
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default Routing;
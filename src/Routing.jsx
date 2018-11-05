import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Browser from './Browser';
import WishList from './WishList';
import About from './About';
import NoMatch from './NoMatch'; 
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import Footer from './Footer';

const Routing = () => {
	return (
		<BrowserRouter>
			<div>
				<div>
					<Header />
					<ul>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/browser">Browser</NavLink>
						<NavLink to="/wish-list">Wish list</NavLink>
						<NavLink to="/about">about</NavLink>
					</ul>
				</div>
				<Switch>
					<Route exact path= "/" component={Home}/>
					<Route path= "/browser" component={Browser}/>
					<Route path= "/wish-list" component={WishList}/>
					<Route path= "/about" component={About}/>
					<Route component={NoMatch}/>                
				</Switch>
				<LeftBar />
				<RightBar />
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default Routing;
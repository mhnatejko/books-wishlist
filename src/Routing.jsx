import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
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
					<Route path= "/author" component={AuthorDetails}/>
					<Route component={NoMatch}/>                
				</Switch>
				<LeftBar />
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default Routing;
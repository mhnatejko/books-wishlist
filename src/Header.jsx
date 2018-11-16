import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<h1>Wishlist</h1>
			<h3>Make your own list of books</h3>
			<nav className='header__navigation'>
				<ul>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/browser">Browser</NavLink>
					<NavLink to="/wish-list">Wishlist</NavLink>
					<NavLink to="/about">about</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
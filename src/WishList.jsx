import React from 'react';
import { connect } from 'react-redux'; 
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import Spinner from 'react-spinkit';
import { loadBooks } from './redux/actions';

const WishList = ({ fetching, loadBooks }) => {
	return (
		<div>
			<h1>Your wishlist of books</h1>
            <SearchSort />
            <button onClick={loadBooks}>load</button> 
			{
				fetching ? 
					<Spinner name="circle" color="black" fadeIn="none"/>
					:
					<BookCards />
			}      			 
		</div>
	);    
};

const mapStateToProps = state => ({
	fetching: state.fetching
});

const mapDispatchToProps = dispatch => ({
	loadBooks: () => dispatch(loadBooks())
})

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
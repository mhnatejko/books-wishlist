import React from 'react';
import { connect } from 'react-redux'; 
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';
import { loadBooks, requestApi } from './redux/actions';

const source = 'wishListData'
const WishList = ({ testAsk, books, fetching, loadBooks }) => {
	return (
		<div>
			<h1>Your wishlist of books</h1>
			<SearchSort source={source}/>
			<button onClick={loadBooks}>load</button> 
			<button onClick={testAsk}>ask for harry potter</button>
			{
				fetching 
					? 
					<SpinnerComponent />
					:
					<BookCards books={books}/>
			}      			 
		</div>
	);    
};

const mapStateToProps = state => ({
	fetching: state[source].fetching,
	books: state[source].books,
});

const mapDispatchToProps = dispatch => ({
	loadBooks: () => dispatch(loadBooks(source)),
	testAsk: () => dispatch(requestApi('harry+potter', source))
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
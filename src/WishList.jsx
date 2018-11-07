import React from 'react';
import { connect } from 'react-redux'; 
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const source = 'wishListData'
const WishList = ({ books, fetching }) => {
	return (
		<div>
			<h1>Your wishlist of books</h1>
			<SearchSort source={source}/>
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

// const mapDispatchToProps = dispatch => ({
// 	loadBooks: () => dispatch(loadBooks(source)),
// 	testAsk: () => dispatch(requestApi('harry+potter', source))
// });

export default connect(mapStateToProps)(WishList);

//			<button onClick={loadBooks}>load</button> 
//			<button onClick={testAsk}>ask for harry potter</button>
import React from 'react';
import { connect } from 'react-redux'; 
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';
import { downloadWishList } from './redux/actions';

const source = 'wishListData'
const WishList = ({ books, fetching, downloadWishList }) => {
	return (
		<div>
			<h1>Your wishlist of books</h1>
			<p>save list to file</p>
			<button download="wishList.txt" onClick={downloadWishList}>save &#8681;</button>
			<a href=""></a>
			<SearchSort source={source}/>
			{
				fetching 
					? 
					<SpinnerComponent />
					:
					<BookCards books={books} source={source}/>
			}      			 
		</div>
	);    
};

const mapStateToProps = state => ({
	fetching: state[source].fetching,
	books: state[source].books,
});

const mapDispatchToProps = dispatch => ({
	downloadWishList: () => dispatch(downloadWishList())
})

// const mapDispatchToProps = dispatch => ({
// 	loadBooks: () => dispatch(loadBooks(source)),
// 	testAsk: () => dispatch(requestApi('harry+potter', source))
// });

export default connect(mapStateToProps, mapDispatchToProps)(WishList);

//			<button onClick={loadBooks}>load</button> 
//			<button onClick={testAsk}>ask for harry potter</button>
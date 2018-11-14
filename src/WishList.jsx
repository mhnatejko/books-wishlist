import React from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { downloadWishList } from './redux/actions';
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const source = 'wishListData';
const WishList = ({ books, fetching, downloadWishList }) => {
	return (
		<section className='main sorted-component wish-list'>
			<SearchSort source={source}/>
			<div className='sorted-component_content'>
				<h1>Your wishlist of books</h1>
				<p>save list to file</p>
				<button download="wishList.txt" onClick={downloadWishList}>save &#8681;</button>
				
				{
					fetching 
						? 
						<SpinnerComponent />
						:
						<BookCards books={books} source={source}/>
				}      			 
			</div>
		</section>
	);    
};

const mapStateToProps = state => ({
	books: state[source].books,
	fetching: state[source].fetching
});

const mapDispatchToProps = dispatch => ({
	downloadWishList: () => dispatch(downloadWishList())
});

WishList.propTypes = {
	books: PropTypes.array,
	fetching: PropTypes.bool,
	downloadWishList: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);

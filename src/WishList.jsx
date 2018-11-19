import React from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';
import { fileMaker } from './special_functions/download_function';

const source = 'wishListData';
const WishList = ({ books, fetching, downloadWishList }) => { //
	return (
		<section className='main sorted-component wish-list'>
			<SearchSort source={source}/>
			<div className='sorted-component_content'>
				<h1>Your wishlist of books</h1>
				<div className='wish-list__save'>
					<p>save list to file</p>
					<button download="wishList.txt" onClick={() => fileMaker()}>save <span className="fas fa-file-download"/> {/*&#8681;*/}</button>
				</div>
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

WishList.propTypes = {
	books: PropTypes.array,
	fetching: PropTypes.bool,
};

export default connect(mapStateToProps)(WishList);//

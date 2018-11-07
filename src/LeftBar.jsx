import React from 'react';
import { connect } from 'react-redux';
import { loadBooks } from './redux/actions';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const LeftBar = ({ books, fetching, loadBooks}) => {
	return (
		<div>
			<h2>Left</h2>
			<button onClick={loadBooks}>load</button> 
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
	fetching: state.leftBarData.fetching,
	books: state.leftBarData.books,
});

const mapDispatchToProps = dispatch => ({
	loadBooks: () => dispatch(loadBooks('leftBarData'))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
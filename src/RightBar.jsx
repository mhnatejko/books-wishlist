import React from 'react';
import { connect } from 'react-redux';
import { loadBooks } from './redux/actions';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const RightBar = ({ books, fetching, loadBooks}) => {
	return (
		<div>
			<h2>Right</h2>
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
	fetching: state.rightBarData.fetching,
	books: state.rightBarData.books,
});

const mapDispatchToProps = dispatch => ({
	loadBooks: () => dispatch(loadBooks('rightBarData'))
});

export default connect(mapStateToProps, mapDispatchToProps)(RightBar);
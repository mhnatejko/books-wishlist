import React from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { loadBooks } from './redux/actions';
import BookCards from './BookCards';

const LeftBar = ({ books, fetching, loadBooks}) => {
	return (
		<div>
			<h2>Left</h2>
			<button onClick={loadBooks}>load</button> 
			{
				fetching 
					? 
					<Spinner name="circle" color="black" fadeIn="none"/>
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
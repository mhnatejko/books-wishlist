import React from 'react';
import { connect } from 'react-redux';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const LeftBar = ({ books, loading}) => {
	return (
		<div>
			<h2>Left</h2> 
			{
				loading 
					? 
					<SpinnerComponent />
					:
					<BookCards books={books}/>
			}      
		</div>
	);
};

const mapStateToProps = state => ({
	loading: state.leftBarData.loading,
	books: state.leftBarData.books,
});

export default connect(mapStateToProps)(LeftBar);
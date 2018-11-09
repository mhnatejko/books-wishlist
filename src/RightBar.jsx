import React from 'react';
import { connect } from 'react-redux';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const RightBar = ({ books, loading}) => {
	return (
		<div>
			<h2>Right</h2>
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
	loading: state.rightBarData.loading,
	books: state.rightBarData.books,
});

export default connect(mapStateToProps)(RightBar);
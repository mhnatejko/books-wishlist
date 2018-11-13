import React from 'react';
import { connect } from 'react-redux'; 
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const source = 'browserData'
const Browser = ({ books, loading }) => {
    return (
		<div>
            <h1>Search books or authors</h1>
            <SearchSort source={source}/>
            {
				loading 
					? 
					<SpinnerComponent />
					:
					<BookCards source={source} books={books}/>
			}      		
        </div>
    )
}

const mapStateToProps = state => ({
	loading: state[source].loading,
	books: state[source].books
});

export default connect(mapStateToProps)(Browser);
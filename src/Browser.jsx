import React from 'react';
import { connect } from 'react-redux'; 
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const source = 'browserData'
const Browser = ({ books, fetching }) => {
    return (
        <div>
            <h1>Search books or authors</h1>
            <SearchSort source={source}/>
            {
				fetching 
					? 
					<SpinnerComponent />
					:
					<BookCards source={source} books={books}/>
			}      		
        </div>
    )
}

const mapStateToProps = state => ({
	fetching: state[source].fetching,
	books: state[source].books
});

export default connect(mapStateToProps)(Browser);
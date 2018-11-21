import React from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import SearchSort from './SearchSort';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';


const source = 'browserData';
const Browser = ({ books, loading }) => {
	return (
		<section className='main sorted-component browser'>			
			<SearchSort source={source}/>
			<div className='sorted-component_content'>
				<h1>Search books or authors</h1>
				{
					!!loading 
						? 
						<SpinnerComponent />
						:
						<BookCards source={source} books={books}/>
				} 
			</div>     		
		</section>
	);
};

const mapStateToProps = state => ({
	books: state[source].books,
	loading: state[source].loading
});

Browser.propTypes = {
	books: PropTypes.array,
	loading: PropTypes.bool
};

export default connect(mapStateToProps)(Browser);
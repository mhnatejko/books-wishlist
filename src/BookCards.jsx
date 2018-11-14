import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const BookCards = ({books, source}) => {
	return (
		<div className='book-cards'>
			{
				books.length > 0 
					? books.map(book => <BookCard source={source} key={book.id} data={book}/>)
					: <p>no results for given phrase</p>
			}
		</div>
	);
};

BookCard.propTypes = {
	books: PropTypes.array,
	source: PropTypes.string
};

export default BookCards;
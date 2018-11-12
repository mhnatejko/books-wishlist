import React from 'react';
import BookCard from './BookCard';

const BookCards = ({source, books}) => {
    return (
        <div>
            {
                books.length > 0 
                ? books.map(book => <BookCard source={source} key={book.id} data={book}/>)
                : <p>no results for given phrase</p>
            }
        </div>
    )
}

export default BookCards;
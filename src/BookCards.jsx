import React from 'react';
import BookCard from './BookCard';

const BookCards = ({source, books}) => {
    return (
        <div>
            {books && books.map(book => <BookCard source={source} key={book.id} data={book}/>)}
        </div>
    )
}

export default BookCards;
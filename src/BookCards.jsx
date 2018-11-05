import React from 'react';
import BookCard from './BookCard';

const BookCards = ({books}) => {
    return (
        <div>
            {books && books.map(book => <BookCard key={book.id} data={book}/>)}
        </div>
    )
}



export default BookCards;
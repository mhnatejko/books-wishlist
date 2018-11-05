import React from 'react';
import { connect } from 'react-redux';

import BookCard from './BookCard';

const BookCards = ({books}) => {
    return (
        <div>
            {books.map(book => <BookCard key={book.id} data={book}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    books: state.books
})

export default connect(mapStateToProps)(BookCards);
import React from 'react';

const BookCard = (props) => {
    return (
        <div key={props.data.id}>
            <p>title:{props.data.best_book_title}</p>
            <p>author:{props.data.best_book_author_name}</p>
            <p>publication data:{props.data.original_publication_year}</p>
            <p>average rating:{props.data.average_rating}</p>
            <p>rating counts:{props.data.ratings_count}</p>
            <p>description:{props.data.description}</p>
            <img src={props.data.best_book_image_url} alt={props.data.best_book_title} />
        </div>
    )
}

export default BookCard;
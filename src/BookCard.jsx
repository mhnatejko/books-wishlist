import React from 'react';

const BookCard = (props) => {
    return (
        <div key={props.data.id}>
            <p>title:{props.data.title}</p>
            <p>author:{props.data.author}</p>
            <p>description:{props.data.description}</p>
        </div>
    )
}

export default BookCard;
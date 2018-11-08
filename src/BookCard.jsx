import React from 'react';
import { connect } from 'react-redux'; 
import { requestDetailsApi } from './redux/actions';

const BookCard = (props) => {
    return (
        <div key={props.data.best_book_id}>
            <img src={props.data.best_book_image_url} alt={props.data.best_book_title} />
            <button>+</button>
            <p>title:{props.data.best_book_title}</p>
            <p>author:{props.data.best_book_author_name}</p>
            <p>publication data:{props.data.original_publication_year}</p>
            <p>average rating:{props.data.average_rating}</p>
            <p>rating counts:{props.data.ratings_count}</p>
            <button onClick={() => props.requestDetailsApi(props.data.best_book_id, props.source)}>more</button>
            <p>description:{props.data.description}</p>            
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    requestDetailsApi: (bookID, source) => dispatch(requestDetailsApi(bookID, source))
})

export default connect(null, mapDispatchToProps)(BookCard);
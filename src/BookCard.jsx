import React from 'react';
import { connect } from 'react-redux'; 
import { requestDetailsApi } from './redux/actions';
import SpinnerComponent from './SpinnerComponent'

const BookCard = (props) => {
    return (
        <div key={props.data.best_book_id}>
            <img src={props.data.best_book_image_url} alt={props.data.best_book_title} />
            <button>+</button>
            <p>title:{props.data.best_book_title}</p>
            {props.data.best_book_title !== props.data.details && <p>{props.data.original_title}</p>}
            <p>author:{props.data.best_book_author_name}</p>
            <p>publication date: {props.data.original_publication_year}</p>
            {props.data.details && <p>.{props.data.publication_month}.{props.data.publication_day}</p>}            
            <p>average rating:{props.data.average_rating} / 5</p>
            {props.data.details && <p>of {props.data.ratings_count} votes</p>}
            {!props.data.details && <button onClick={() => props.requestDetailsApi(props.data.best_book_id, props.source)}>more</button>}
            {props.data.detailsLoading && <SpinnerComponent />}
            {props.data.details && 
                <div>
                    <p>country: {props.data.country}</p> 
                    <p>language: {props.data.language_code}</p>
                    <p>descrpition: {props.data.description}</p>
                    <p>tags:</p>
                    <div>
                    {props.data.tags && props.data.tags.map(tag => <p>{tag['_attributes'].name}</p>)}
                    </div>
                    <p>{props.data.book_link}</p>
                </div>            
            }
               
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    requestDetailsApi: (bookID, source) => dispatch(requestDetailsApi(bookID, source))
});


export default connect(null, mapDispatchToProps)(BookCard);
import React from 'react';
import { connect } from 'react-redux'; 
import { requestDetailsApi } from './redux/actions';
import SpinnerComponent from './SpinnerComponent'

const BookCard = ({data, source, requestDetailsApi}) => {
    return (
        <div key={data.best_book_id}>
            {data.best_book_image_url && !data.best_book_image_url.includes("nophoto") && <img src={data.best_book_image_url} alt={data.best_book_title} />}
            <button>+</button>
            <p>title:{data.best_book_title}</p>
            {data.best_book_title !== data.details && <p>{data.original_title}</p>}
            <p>author:{data.best_book_author_name}</p>
            {data.details && <p>publisher: {data.publisher}</p>}
            {data.details ? 
                <p>publication date: {data.publication_month}.{data.publication_day}.{data.original_publication_year}</p> 
                : 
                <p>publication date: {data.original_publication_year}</p>
            }
            {data.details ?
                <p>average rating:{data.average_rating} / 5 of {data.ratings_count} votes</p>
                :
                <p>average rating:{data.average_rating} / 5</p>
            }
            {!data.details && <button onClick={() => requestDetailsApi(data.best_book_id, source)}>more</button>}
            {data.detailsLoading && <SpinnerComponent />}
            {data.details && 
                <div>                    
                    <p>country: {data.country}</p> 
                    <p>language: {data.language_code}</p>
                    <p>descrpition: {data.description}</p>
                    <p>tags:</p>
                    <div>
                    {data.tags && data.tags.map(tag => <p>{tag['_attributes'].name}</p>)}
                    </div>
                    <a href={data.book_link}>book on goodereads</a>
                </div>            
            }
               
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    requestDetailsApi: (bookID, source) => dispatch(requestDetailsApi(bookID, source))
});

export default connect(null, mapDispatchToProps)(BookCard);
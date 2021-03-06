import React from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
	addToWishList,
	removeFromWishList,
	requestAuthorDetailsApi,
	requestDetailsApi
} from './redux/actions';
import SpinnerComponent from './SpinnerComponent';



const BookCard = ({
	data, 
	source, 
	wishListDataBooks,
	addToWishList,
	removeFromWishList,
	requestAuthorDatails,
	requestDetailsApi
}) => {
	return (
		<div key={data.best_book_id} className={`book-card--${source}`}>
			<div className={`book-card--${source}__image`}>
				{
					!!data.best_book_image_url 
                && !data.best_book_image_url.includes('nophoto') 
                && <img src={data.best_book_image_url} alt={data.best_book_title} />
				}
			</div>    
			{
				source !== 'wishListData' &&  !wishListDataBooks.some(book => book.best_book_id === data.best_book_id)
					? <button className={`book-card--${source}__btn book-card--${source}__btn--plus`} onClick={() => addToWishList(data)}>+</button> 
					: <button className={`book-card--${source}__btn book-card--${source}__btn--minus`} onClick={() => removeFromWishList(data.best_book_id, 'wishListData')}>-</button>
			}
			<div className={`book-card--${source}__info`}>
				<Link to='/author'> 
					<p onClick={() => requestAuthorDatails(data.best_book_author_id, data.best_book_author_name)}>{data.best_book_author_name}</p>
				</Link>
				<h4 className={`book-card--${source}__info--title`}>{data.best_book_title}</h4>
				{data.best_book_title !== data.details && <p>{data.original_title}</p>}
            
				
            
				{!!data.details && <p>publisher: {data.publisher}</p>}
				{!!data.details ? 
					<p className={`book-card--${source}__info--date`}>publication date: {data.publication_day}.{data.publication_month}.{data.original_publication_year}</p> 
					: 
					<p className={`book-card--${source}__info--date`}>publication date: {data.original_publication_year}</p>
				}
				{data.details ?
					<p>rating: {data.average_rating} / 5 of {data.ratings_count} votes</p>
					:
					<p>rating: {data.average_rating} / 5</p>
				}
			</div>
			{!data.details && <button className={`book-card--${source}__more-btn`} onClick={() => requestDetailsApi(data.best_book_id, source)}>more</button>}
			{!!data.detailsLoading && <SpinnerComponent />}
			<div className={`book-card--${source}__details`}>
				{!!data.details && 
					<div>                    
						<p>country: {data.country}</p> 
						<p>language: {data.language_code}</p>
						<div dangerouslySetInnerHTML={{__html: data.description}} />
						<p>tags:</p>
						<div className={`book-card--${source}__tags`}>
							{!!data.tags && data.tags.map((tag, i) => <p key={i} className={`book-card--${source}__tag`}>{tag['_attributes'].name}</p>)}
						</div>
						<a href={data.book_link}>book on goodereads</a>
					</div>            
				} 
			</div>              
		</div>
	);
};

const mapStateToProps = state => ({
	wishListDataBooks: state.wishListData.books
});

const mapDispatchToProps = dispatch => ({
	addToWishList: (data) => dispatch(addToWishList(data)),
	removeFromWishList: (bookID, source) => dispatch(removeFromWishList(bookID, source)),
	requestAuthorDatails: (authorID, authorName) => dispatch(requestAuthorDetailsApi(authorID, authorName, 'authorDetails')),
	requestDetailsApi: (bookID, source) => dispatch(requestDetailsApi(bookID, source))
});

BookCard.propTypes = {
	data: PropTypes.object,
	source: PropTypes.string,
	wishListDataBooks: PropTypes.array,
	addToWishList: PropTypes.func,
	removeFromWishList: PropTypes.func,
	requestAuthorDatails: PropTypes.func,
	requestDetailsApi: PropTypes.func    
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
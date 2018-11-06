import response from './response';
import responseDetails from './responseDetails';
import { loadBooks } from '../redux/actions';


function loadBooksList(jsApiRespObj){
    var smallJsApiRespObj = [...jsApiRespObj["GoodreadsResponse"]["search"]["results"]["work"]];
    var reorgData = [];
    for (var el of smallJsApiRespObj) {
        reorgData.push({
            id: el['id']['_text'],
            ratings_count: el['ratings_count']['_text'],
            original_publication_year: el['original_publication_year']['_text'],
            average_rating: el['average_rating']['_text'],

            best_book_id: el['best_book']['id']['_text'],
            best_book_title: el['best_book']['title']['_text'],
            best_book_author_id: el['best_book']['author']['id']['_text'],
            best_book_author_name: el['best_book']['author']['name']['_text'],
            best_book_image_url: el['best_book']['image_url']['_text'],
            best_book_small_image_url: el['best_book']['small_image_url']['_text'],
        })
    };
    return reorgData;
}

function loadBooksDetails(jsApiRespObj_details, reorgData){
    var smallJsApiRespObj_details = Object.assign({}, jsApiRespObj_details["GoodreadsResponse"]["book"]);
    for(var book of reorgData){
        if(book['best_book_id'] === smallJsApiRespObj_details['id']["_text"]){
            book['details'] = smallJsApiRespObj_details
        }	
    };
}

var base_books = loadBooksList(response);
var base_books_details = loadBooksDetails(responseDetails, base_books)
			// book.id=['id']["_text"]
			// book.isbn=['isbn']['_cdata']
			// book.publication_month=["publication_month"]["_text"]
			// book.publication_day=["publication_day"]["_text"]
			// book.publisher=["publisher"]["_text"]
			// book.language_code=["language_code"]["_text"]
			// book.description=["description"]['_cdata']

			// book.authors=bookDetail["authors"]["author"]["id"]["_text"]
			// book.popular_shelves=bookDetail[...["popular_shelves"]["shelf"]]               

    
export default base_books;


// ["GoodreadsResponse"]["book"]
// --['id']["_text"] //for connect with state
// --['isbn']['_cdata']
// --["publication_month"]["_text"]
// --["publication_day"]["_text"]
// --["publisher"]["_text"]
// --["language_code"]["_text"]
// --["description"]['_cdata']

// --["authors"]["author"]["id"]["_text"]
// --["popular_shelves"]["shelf"] //tablica
// -- --["_attributes"]["name"]]
export function loadBooksList(jsApiRespObj){
    //if(jsApiRespObj.constructor === Array){}
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


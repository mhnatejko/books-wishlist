export function loadBooksList(jsApiRespObj){
    //if(jsApiRespObj.constructor === Array){}
    const smallJsApiRespObj = [...jsApiRespObj["GoodreadsResponse"]["search"]["results"]["work"]];
    const reorgData = [];
    for (let el of smallJsApiRespObj) {
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

export function loadBooksDetails(jsApiRespObj_details){
    console.log(jsApiRespObj_details)
    const smallJsApiRespObj_details = {...jsApiRespObj_details["GoodreadsResponse"]["book"]};
    const reorgData = {
        country: smallJsApiRespObj_details["country_code"]["_cdata"],
        publication_month: smallJsApiRespObj_details["publication_month"]["_text"],
        publication_day: smallJsApiRespObj_details["publication_day"]["_text"],
        publisher: smallJsApiRespObj_details["publisher"]["_text"],
        language_code: smallJsApiRespObj_details["language_code"]["_text"],
        description: smallJsApiRespObj_details["description"]["_cdata"],
        ratings_count: smallJsApiRespObj_details["work"]["ratings_count"]["_text"],
        original_title: smallJsApiRespObj_details["work"]["original_title"]["_text"],
        tags: smallJsApiRespObj_details["popular_shelves"]["shelf"] 
        ? 
        [...smallJsApiRespObj_details["popular_shelves"]["shelf"]] 
        :
        [], // ["_attributes"]["name"]
        book_link: smallJsApiRespObj_details["book_links"]["book_link"]["link"]["_text"]
    }    
    return reorgData;   	
    
}


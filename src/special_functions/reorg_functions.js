export function loadBooksList(jsApiRespObj){
    if(jsApiRespObj['GoodreadsResponse']['search']['results']['work']){
        const smallJsApiRespObj = [...jsApiRespObj['GoodreadsResponse']['search']['results']['work']];
        const reorgData = [];
        for (let el of smallJsApiRespObj) {
            reorgData.push({
                details: false,
                detailsLoading: false,
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

}

export function loadBooksDetails(jsApiRespObj_details){
    const smallJsApiRespObj_details = {...jsApiRespObj_details['GoodreadsResponse']['book']};
    const reorgData = {
        country: smallJsApiRespObj_details['country_code']['_cdata'],
        publication_month: smallJsApiRespObj_details['publication_month']['_text'],
        publication_day: smallJsApiRespObj_details['publication_day']['_text'],
        publisher: smallJsApiRespObj_details['publisher']['_text'],
        language_code: smallJsApiRespObj_details['language_code']['_text'],
        description: smallJsApiRespObj_details['description']['_cdata'],
        ratings_count: smallJsApiRespObj_details['work']['ratings_count']['_text'],
        original_title: smallJsApiRespObj_details['work']['original_title']['_text'],
        idbn: smallJsApiRespObj_details['isbn']['_cdata'],
        tags: smallJsApiRespObj_details['popular_shelves']['shelf'] 
        ? 
        [...smallJsApiRespObj_details['popular_shelves']['shelf']] 
        :
        [],
        book_link: smallJsApiRespObj_details['url']['_cdata']
    }    
    return reorgData;       
}

export function loadAuthorDetails(jsApiRespObj_authorDetails){
    const smallJsApiRespObj_authorDetails = {...jsApiRespObj_authorDetails['GoodreadsResponse']['author']};
    const reorgData = {
        name: smallJsApiRespObj_authorDetails['name']['_text'],
        about: smallJsApiRespObj_authorDetails['about']['_cdata'],
        books: [...smallJsApiRespObj_authorDetails['books']['book'].map(book => book.title['_text'])],
        born_at: smallJsApiRespObj_authorDetails['born_at']['_text'] && smallJsApiRespObj_authorDetails['born_at']['_text'].split('/').reverse().join('.'),
        died_at: smallJsApiRespObj_authorDetails['died_at']['_text'] && smallJsApiRespObj_authorDetails['died_at']['_text'].split('/').reverse().join('.'),
        gender: smallJsApiRespObj_authorDetails['gender']['_text'],
        hometown: smallJsApiRespObj_authorDetails['hometown']['_text'],
        image_url: smallJsApiRespObj_authorDetails['image_url']['_cdata'],
        large_image_url: smallJsApiRespObj_authorDetails['large_image_url']['_cdata'],
        works_count: smallJsApiRespObj_authorDetails['works_count']['_text'],
        influences: smallJsApiRespObj_authorDetails['influences']['_cdata'],
        link: smallJsApiRespObj_authorDetails['link']['_cdata']
    }
    return reorgData; 
}


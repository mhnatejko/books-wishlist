// ['GoodreadsResponse']['search']['results']['work'] //to tablica wynikow
// //[0][1]...
// ['id']['_text'] //id
// ['ratings_count']['_text']
// ['original_publication_year']['_text']
// ['average_rating']['_text']

// ['best_book']['id']['_text']
// ['best_book']['title']['_text']
// ['best_book']['author']['id']['_text']
// ['best_book']['author']['name']['_text']
// ['best_book']['image_url']['_text']
// ['best_book']['small_image_url']['_text']

// var newResponse = [...response["GoodreadsResponse"]["search"]["results"]["work"]]
// var newResponse2= []
// for (var el of newResponse) {
//   newResponse2.push({ 
//     id: el['id']['_text'],
//     ratings_count: el['ratings_count']['_text'],
//     original_publication_year: el['original_publication_year']['_text'],
//     average_rating: el['average_rating']['_text'],

//     best_book_id: el['best_book']['id']['_text'],
//     best_book_title: el['best_book']['title']['_text'],
//     best_book_author_id: el['best_book']['author']['id']['_text'],
//     best_book_author_name: el['best_book']['author']['name']['_text'],
//     best_book_image_url: el['best_book']['image_url']['_text'],
//     best_book_small_image_url: el['best_book']['small_image_url']['_text'],
//   })
// }

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
// -- --["_attributes"]["name"]
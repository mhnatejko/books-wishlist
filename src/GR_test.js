import convert from 'xml-js';

const URIroot  = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/';
const key = 'key=La7pcvvUjmpkjO4bXd7yw';    

function searchURI(keyWord){
	let searchURI = `${URIroot}search.xml?${key}'&q='${keyWord}`;
	return searchURI;
}

// let authorID = 18541;

// function authorByIdURI(authorID){
// 	let authorByIdURI = `${URIroot}author/show/${authorID}?format=xml&${key}`;
// 	let seriesByIdURI = `${URIroot}series/list/${authorID}.xml?${key}`;    
// }

//get quotes by author ---based on https://goodquotesapi.herokuapp.com
//fetch("https://goodquotesapi.herokuapp.com/author/jacek+dukaj").then(r => r.text()).then(r => console.log(r))
//or: 
// - /title/xxx
// - /tag/xxx

function fetcher(keyWord){  
	const converterOptions = {compact: true, spaces: 4}
	fetch(
		searchURI(keyWord),
		{
			mode: 'cors',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true,
				'X-Requested-With': 'XmlHttpRequest'
			}
		}
	)   
		.then(r => r.text())
		.then(r => console.log(
			convert.xml2json(r, converterOptions)
		))
		
}

export default fetcher;


const URIroot  = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/';
const key = 'key=La7pcvvUjmpkjO4bXd7yw';    

export const searchURI = keyWord => `${URIroot}search.xml?${key}'&q='${keyWord}`;
export const bookDetails = bookID => `${URIroot}/book/show/${bookID}.xml?${key}`;

export const converterOptions = {compact: true, spaces: 4};
export const fetchOptions = {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'X-Requested-With': 'XmlHttpRequest'
    }
};

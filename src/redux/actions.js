import * as CONSTANTS from './constants';
import convert from 'xml-js';
import * as FETCHING from '../special_functions/request_functions';
import { loadBooksList, loadBooksDetails, loadAuthorDetails } from '../special_functions/reorg_functions';

export const loadBooks = (source) => ({
	type: CONSTANTS.LOAD_BOOKS,
	source
});

export const setNewData = (data, source) => ({
	type: CONSTANTS.SET_NEW_DATA,
	data,
	source
});

export const setDetailsData = (data, bookID, source) => ({
	type: CONSTANTS.SET_DETAILS_DATA,
	data,
	bookID,
	source,
});

export const changeSearchVal = (value) => ({
	type: CONSTANTS.CHANGE_SEARCH_VALUE,
	value
});

export const changeFilterVal = (value, source) => ({
	type: CONSTANTS.CHANGE_FILTER_VALUE,
	value,
	source
});

export const loaderOff = (source) => ({
	type: CONSTANTS.LOADER_OFF,
	source
});

export const loaderOn = (source) => ({
	type: CONSTANTS.LOADER_ON,
	source
});


export function requestApi(keyWord, source){
	if(keyWord && typeof keyWord === 'string') keyWord = keyWord.split(' ').join('+');
	return function(dispatch){
		dispatch(loaderOn(source));
		fetch(FETCHING.searchURI(keyWord), FETCHING.fetchOptions)   
			.then(res => res.text())
			.then(res => { 
				dispatch(
					setNewData(
						loadBooksList(
							convert.xml2js(
								res, FETCHING.converterOptions
							)
						),
						source
					)
				);
				dispatch(loadBooks(source));
				dispatch(loaderOff(source))
			})     
			.catch(err => console.log(err))                
	}; 
};

export function requestDetailsApi(bookID, source){
	return function(dispatch){
		dispatch(loaderOn(source));
		fetch(FETCHING.bookDetails(bookID), FETCHING.fetchOptions)
			.then(res => res.text())
			.then(res => {
				dispatch(
					setDetailsData(
						loadBooksDetails(
							convert.xml2js(
								res, FETCHING.converterOptions
							)
						),
						bookID,
						source
					)
				);
				dispatch(loadBooks(source));
				dispatch(loaderOff(source));
			})
			.catch(err => console.log(err));
	};
};

export const setAuthorDetails = data => ({
	type: CONSTANTS.SET_AUTHOR_DETAILS,
	data
});

export const setAuthorDetailsQuotes = quotesData => ({
	type: CONSTANTS.SET_AUTHOR_DETAILS_QUOTES,
	quotesData
});

export function requestAuthorDetailsApi(authorID, authorName, source){
	return function(dispatch){
		dispatch(loaderOn(source));
		fetch(FETCHING.authorDetails(authorID), FETCHING.fetchOptions)
			.then(res => res.text())
			.then(res => {
				dispatch(
					setAuthorDetails(
						loadAuthorDetails(
							convert.xml2js(
								res, FETCHING.converterOptions
							)
						)
					)
				);
				dispatch(loaderOff(source));
				fetch(`https://goodquotesapi.herokuapp.com/author/${authorName.split(' ').join('+')}`)
					.then(res => res.text())
					.then(res => {
						dispatch(
							setAuthorDetailsQuotes(JSON.parse(res))
						);
					});
			})
			.catch(err => console.log(err))
	};
};

export const sortBy = (keyWord, source) => ({
	type: CONSTANTS.SORT_BY,
	keyWord,
	source
});

export const filter = (filterGroup, filterValue, source) => ({
	type: CONSTANTS.FILTER,
	filterGroup,
	filterValue,
	source    
});

export const changeFilterGroup = value => ({
	type: CONSTANTS.CHANGE_FILTER_GROUP,
	value
});

export const addToWishList = (data) => ({
	type: CONSTANTS.ADD_TO_WISHLIST,
	data,
	source: 'wishListData'
});

export const removeFromWishList = (bookID, source) => ({
	type: CONSTANTS.REMOVE_FROM_WISHLIST,
	bookID,
	source
});

export const changeLeftBarValue = value => ({
	type: CONSTANTS.CHANGE_LEFT_BAR_VALUE,
	value
});


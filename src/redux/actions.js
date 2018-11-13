import * as CONSTANTS from './constants';
import convert from 'xml-js';
import * as FETCHING from './request_functions';
import { loadBooksList, loadBooksDetails } from './reorg_functions';

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
    console.log(keyWord);
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
    }   
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
    }
};

export const sortBy = (keyWord, source) => ({
    type: CONSTANTS.SORT_BY,
    keyWord,
    source
});

export const filter = (keyWord, source) => ({
    type: CONSTANTS.FILTER,
    keyWord,
    source
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

export const downloadWishList = () => ({
    type: CONSTANTS.DOWNLOAD_WISH_LIST
});

export const changeLeftBarValue = value => ({
    type: CONSTANTS.CHANGE_LEFT_BAR_VALUE,
    value
})


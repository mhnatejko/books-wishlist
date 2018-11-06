import * as CONSTANTS from './constants';
import convert from 'xml-js';
import * as FETCHING from './request_functions';
import { loadBooksList } from './reorg_functions';

export const loadBooks = (localization) => ({
    type: CONSTANTS.LOAD_BOOKS,
    localization
});

export const setNewData = (data) => ({
    type: CONSTANTS.SET_NEW_DATA,
    data
});

export function requestApi(keyWord){
    return function(dispatch){
        fetch(FETCHING.searchURI(keyWord),FETCHING.fetchOptions)   
		.then(res => res.text())
        .then(res => dispatch(
            setNewData(
                loadBooksList(
                    convert.xml2js(
                        res, FETCHING.converterOptions
                    )
                )
            )
        )
    ).then(dispatch(loadBooks('wishListData')))
    }
};


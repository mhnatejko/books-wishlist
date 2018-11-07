import * as CONSTANTS from './constants';
import convert from 'xml-js';
import * as FETCHING from './request_functions';
import { loadBooksList } from './reorg_functions';

export const loadBooks = (source) => ({
    type: CONSTANTS.LOAD_BOOKS,
    source
});

export const setNewData = (data, source) => ({
    type: CONSTANTS.SET_NEW_DATA,
    data,
    source
});

export const changeValue = (value) => ({
    type: CONSTANTS.CHANGE_VALUE,
    value
})

export function requestApi(keyWord, source){
    return function(dispatch){
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
                
            }
        )                     
    }
};

export const sortBy = (keyWord, source) => ({
    type: CONSTANTS.SORT_BY,
    keyWord,
    source
})

export const filter = (keyWord) => ({
    type: CONSTANTS.FILTER
})


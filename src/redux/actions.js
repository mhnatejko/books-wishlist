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

export const changeSearchVal = (value) => ({
    type: CONSTANTS.CHANGE_SEARCH_VALUE,
    value
});

export const changeFilterVal = (value, source) => ({
    type: CONSTANTS.CHANGE_FILTER_VALUE,
    value,
    source
});


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

export const filter = (keyWord, source) => ({
    type: CONSTANTS.FILTER,
    keyWord,
    source
})


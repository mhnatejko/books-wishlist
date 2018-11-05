import * as CONSTANTS from './constants';

export const loadBooks = (localization) => ({
    type: CONSTANTS.LOAD_BOOKS,
    localization
})
import * as CONSTANTS from './constants';
import { getWishListData, setWishListData } from './store_wishList';
import { fileMaker } from './download_function';



const defaultState = {
	searchValue: undefined,
	filterValue: undefined,
	temporaryBooksTable: undefined,
	browserData: {
		loading: false,
		books: []
	},
	leftBarData: {    
		loading: false,
		books: []
	},
	rightBarData: {    
		loading: false,
		books: [
			{id: '0123', title: 'Lod', author: 'Jacek Dukaj', photo: 'xxx', description: 'Placing assured be if'},
		]
	},
	wishListData: {    
		loading: false,
		books: getWishListData()
	},
}


function reducer(state = defaultState, action){
	switch(action.type){
	case CONSTANTS.LOADER_OFF:
		return {
			...state,
			[action.source]: {
				...state[action.source],
				loading: false
			}
		};
		break;
	case CONSTANTS.LOADER_ON:
		return {
			...state,
			[action.source]: {
				...state[action.source],
				loading: true
			}
		};
		break;
	case CONSTANTS.LOAD_BOOKS:            	
		return {
			...state, 
			[action.source]: {
				...state[action.source], 
				loading: !state[action.source]['loading']
			}
		};
		break;
	case CONSTANTS.CHANGE_SEARCH_VALUE:
		return {
			...state, 
			searchValue: action.value
		};
		break;
	case CONSTANTS.CHANGE_FILTER_VALUE:
		return {
			...state, 
			filterValue: action.value
		};
		break;
	case CONSTANTS.SET_NEW_DATA:
		if(action.data){
			return {
				...state, 
				[action.source]: {
					...state[action.source], 
					books:action.data
				},
				temporaryBooksTable: action.data
			};
		};
		break;
	case CONSTANTS.SET_DETAILS_DATA:
		let allBooks = state[action.source].books;
		let detailedBook = (state[action.source].books.filter(
			book => book.best_book_id === action.bookID)
		)[0];
		let detailedBookIndex = allBooks.indexOf(detailedBook);
		if(action.data){
			return {
				...state,
				[action.source]: {
					...state[action.source],
					books: [
						...allBooks.slice(0, detailedBookIndex),
						{
							...detailedBook,
							...action.data,
							details: true
						},
						...allBooks.slice(detailedBookIndex+1)
					]
				}
			}
		};
		break;
	case CONSTANTS.SORT_BY:
		if(state[action.source].books){
			return {
				...state, 
				[action.source]: {
					...state[action.source], 
					books: 
						action.keyWord === 'best_book_title' || action.keyWord === 'best_book_author_name' 
							?  
							[...state[action.source].books].sort(
								(a, b) => {
									if(a[action.keyWord] < b[action.keyWord]) return -1;
									if(a[action.keyWord] > b[action.keyWord]) return +1;
									if(a[action.keyWord] == b[action.keyWord]) return 0;
								}
							)					
							: 
							[...state[action.source].books].sort(
								(a, b) => {
									return a[action.keyWord] - b[action.keyWord];
								} 
							)
				}
			};
		};
		break;
	case CONSTANTS.FILTER:
		return {
			...state,
			[action.source]: {
				...state[action.source],
				books: [...state.temporaryBooksTable].filter(
					book => book[action.keyWord].toLowerCase().includes(state.filterValue.toLowerCase())
				)
			}
		};
		break;
	case CONSTANTS.ADD_TO_WISHLIST:
		let storageData = getWishListData();
		if(!storageData.some(book => book.best_book_id === action.data.best_book_id)){
			storageData.push(action.data);
			setWishListData(storageData);
			return {
				...state,
				[action.source]: {
					...state[action.source],
					books: [...storageData]
				}
			}
		}
	break;
	case CONSTANTS.REMOVE_FROM_WISHLIST:
		storageData = getWishListData();
		storageData = storageData.filter(book => book.best_book_id !== action.bookID);
		setWishListData(storageData);
		return {
			...state,
			[action.source]: {
				...state[action.source],
				books: [...storageData]
			}
		}
	break;
	case CONSTANTS.DOWNLOAD_WISH_LIST:
		fileMaker();
	break;
	default:
		return {...state};
		break;
	}
}

export default reducer;
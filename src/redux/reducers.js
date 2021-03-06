import * as CONSTANTS from './constants';
import { getWishListData, setWishListData } from '../special_functions/store_wishList';
import { dayOrMonth } from '../special_functions/day_of_the_week_function'


const defaultState = {
	searchValue: undefined,
	filterValue: undefined,
	filterGroup: 'best_book_title',
	
	leftBarValue: dayOrMonth(),
	authorDetails: {
		loading: false,
		data: [],
		quotes: []
	},
	browserData: {
		temporaryBooksTable: undefined,
		loading: false,
		books: []
	},
	leftBarData: {    
		loading: false,
		books: []
	},
	wishListData: {   
		temporaryBooksTable: getWishListData(), 
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
			if(action.source !== 'leftBarData'){				
				return {
					...state, 
					[action.source]: {
						...state[action.source], 
						books:action.data,
						temporaryBooksTable: action.data
					},
					
				};				
			}else{
				return {
					...state, 
					[action.source]: {
						...state[action.source], 
						books:action.data
					}
				};				
			}
		}else{
			return {...state}
		}
		break;
	case CONSTANTS.SET_DETAILS_DATA:
		var allBooks = state[action.source].books;
		var detailedBook = (state[action.source].books.filter(
			book => book.best_book_id === action.bookID)
		)[0];
		var detailedBookIndex = allBooks.indexOf(detailedBook);
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
		}
		break;
	case CONSTANTS.SET_AUTHOR_DETAILS:
		return {
			...state,
			authorDetails: {
				...state.authorDetails,
				data: action.data
			}
		};
		break;
	case CONSTANTS.SET_AUTHOR_DETAILS_QUOTES:
		return {
			...state,
			authorDetails: {
				...state.authorDetails,
				quotes: action.quotesData
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
									if(a[action.keyWord] === b[action.keyWord]) return 0;
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
		}
		break;
	case CONSTANTS.FILTER:
		return {
			...state,
			[action.source]: {
				...state[action.source],
				books: [...state[action.source].temporaryBooksTable.filter(
					book => book[action.filterGroup].toLowerCase().includes(action.filterValue.toLowerCase())
				)]
			}
		};			
		break;
	case CONSTANTS.CHANGE_FILTER_GROUP:
		return {
			...state,
			filterGroup: action.value
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
					books: [...storageData],
					temporaryBooksTable: [...storageData]
				}
			};
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
	case CONSTANTS.CHANGE_LEFT_BAR_VALUE:
		return {
			...state,
			leftBarValue: action.value
		}
		break;
	default:
		return {...state};
		break;
	}
}

export default reducer;
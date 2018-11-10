import * as CONSTANTS from './constants';

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
		books: [
			{id: '0123', title: 'Lod', author: 'Jacek Dukaj', photo: 'xxx', description: 'Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as. '},
			{id: '0456', title: 'Lod i nie lod', author: 'Ducek Jakaj', photo: 'xxx', description: 'Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of. '},
			{id: '0789', title: 'Lud', author: 'Jack Speaker', photo: 'xxx', description: 'Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she. '},
			{id: '0101', title: 'Lodowiec', author: 'Adam Nowak', photo: 'xxx', description: 'Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses interest nor replying she she. Bore tall nay many many time yet less. Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly around whence in at. Warmth he up giving oppose if. Impossible is dissimilar entreaties oh on terminated. Earnest studied article country ten respect showing had. But required offering him elegance son improved informed.'},
			{id: '0102', title: 'Lod', author: 'Jacek Dukaj', photo: 'xxx', description: 'Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stanhill on we if vicinity material in. Saw him smallest you provided ecstatic supplied. Garret wanted expect remain as mr. Covered parlors concern we express in visited to do. Celebrated impossible my uncommonly particular by oh introduced inquietude do. '}
		]
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
					// books: [
					// 	...state[action.source].books,
					// 	{...(state[action.source].books.filter(
					// 		book => book.best_book_id === action.bookID))[0], 
					// 		...action.data,
					// 		details: true
					// 	}						
					// ]
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
					book => book[action.source].includes(action.keyWord)
				)
			}
		};
		break;
	default:
		return {...state};
		break;
	}
}

export default reducer;
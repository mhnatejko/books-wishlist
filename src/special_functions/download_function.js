import { getWishListData } from './store_wishList';

export function fileMaker(){
	function listDataCreator(){
		let wishList = getWishListData();
		let text = 'The books i\'m interested of:';       
		wishList.map(
			(book, i) => text += `\r\n ${i+1}. ${book.best_book_author_name} (${book.original_publication_year}): ${book.best_book_title} \r\n` 
		);
		return text;
	};

	function prepareURL(text){  		
		let data = new Blob([text], {type: 'text/plain'});        
		let textFile = window.URL.createObjectURL(data);  
		return textFile;
	};

	let anchor = document.createElement('a');
	anchor.setAttribute('href', prepareURL(listDataCreator()));    
	anchor.setAttribute('download', 'Book_Wish_List.txt');    
	document.querySelector('body').appendChild(anchor).click();	
};


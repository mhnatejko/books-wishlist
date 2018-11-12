import { getWishListData } from './store_wishList';

export function fileMaker(){
    function listDataCreator(){
        let wishList = getWishListData();
        let text = "The books i would to receive:";
        for(let book of wishList){
            text += `\r\n ${book.best_book_author_name} (${book.original_publication_year}): ${book.best_book_title} \r\n`;
        }
        return text
    }

    function prepareURL(text){  
        console.log(43567897654)  
        let data = new Blob([text], {type: 'text/plain'});
        if (textFile !== null) {
                    window.URL.revokeObjectURL(textFile);
                    }  
        let textFile = window.URL.createObjectURL(data);
        return textFile;
    }

    let anchor = document.createElement('a');
    anchor.setAttribute('href', prepareURL(listDataCreator()));
    anchor.setAttribute('download', 'Book Wish List.txt');
    anchor.click();
}
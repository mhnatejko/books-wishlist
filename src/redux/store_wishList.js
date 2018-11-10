function setWishListData(data){
    return localStorage.setItem('wishList', JSON.stringify(data))
}

export function getWishListData(){
    return JSON.parse( localStorage.getItem('wishList'))
}

export function addNewBook(data){
    setWishListData(getWishListData().push(data))
}

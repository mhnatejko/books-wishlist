export function setWishListData(data){
    localStorage.setItem('wishList', JSON.stringify(data))
}

export function getWishListData(){
    return localStorage.getItem('wishList') ? JSON.parse( localStorage.getItem('wishList')) : []
}


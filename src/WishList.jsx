import React, { Component } from "react";
import SearchSort from './SearchSort';
import BookCards from './BookCards';

import { connect } from 'react-redux'; 

const WishList = ({ fetching }) => {
    return (
        <div>
            <h1>Your wishlist of books</h1>
            <SearchSort />
            {!fetching && <BookCards />}            
        </div>
    )    
}

const mapStateToProps = state => ({
    fetching: state.fetching
})

export default connect(null, mapStateToProps)(WishList);
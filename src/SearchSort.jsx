import React from 'react';
import { connect } from 'react-redux';
import { changeValue, requestApi, sortBy } from './redux/actions';

const SearchSort = ({ sortBy, search, source, searchValue, changeVal }) => {
    return (
        <div>
            <h3>Search & Sort</h3>
            <div>
                <label htmlFor="search" value={searchValue} onChange={e => changeVal(e)}><input id="search"></input></label>            
                <button id="search_btn" onClick={() => search(searchValue, source)}>search</button>
            </div>
            <input id="filter"></input>
            <button id="sort_alpha" onClick={() => sortBy('best_book_title', source)}>az</button>
            <button id="sort_rating" onClick={() => sortBy('average_rating', source)}>rating</button>
            <button id="sort_premier" onClick={() => sortBy('original_publication_year', source)}>data</button>
        </div>
    )
}

const mapStateToProps = state => ({
    searchValue: state.searchValue
})

const mapDispatchToProps = dispatch => ({
    changeVal: e => dispatch(changeValue(e.target.value)),
    sortBy: (keyWord, source) => dispatch(sortBy(keyWord, source)),    
    search: (searchValue, source) => dispatch(requestApi(searchValue, source)),

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchSort);
import React from 'react';
import { connect } from 'react-redux';
import { filter, changeFilterVal, changeSearchVal, requestApi, sortBy } from './redux/actions';

const SearchSort = ({ sortBy, search, source, searchValue, filterValue, changeSearchVal, changeFilterVal, filter }) => {
    return (
        <div>
            <h3>Search & Sort</h3>
            <div>                
                <input id="search"  value={searchValue} onChange={e => changeSearchVal(e)}></input>                         
                <button id="search_btn" onClick={() => search(searchValue, source)}>search</button>
            </div>
            <input id="filter" value={filterValue} onChange={
                e => {
                    changeFilterVal(e); 
                    filter(filterValue, source)
                }
            }></input>
            <button id="sort_alpha" onClick={() => sortBy('best_book_title', source)}>az</button>
            <button id="sort_rating" onClick={() => sortBy('average_rating', source)}>rating</button>
            <button id="sort_premier" onClick={() => sortBy('original_publication_year', source)}>data</button>
        </div>
    )
}

const mapStateToProps = state => ({
    searchValue: state.searchValue,
    filterValue: state.filterValue
})

const mapDispatchToProps = dispatch => ({
    changeSearchVal: e => dispatch(changeSearchVal(e.target.value)),
    changeFilterVal: e => dispatch(changeFilterVal(e.target.value)),
    sortBy: (keyWord, source) => dispatch(sortBy(keyWord, source)),    
    search: (searchValue, source) => dispatch(requestApi(searchValue, source)),
    filter: (filterValue, source) => dispatch(filter(filterValue, source))

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchSort);
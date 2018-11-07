import React from 'react';
import { connect } from 'react-redux';
import { changeValue, requestApi } from './redux/actions';

const SearchSort = ({ search, source, searchValue, changeVal }) => {
    return (
        <div>
            <h3>Search & Sort</h3>
            <div>
                <label htmlFor="search" value={searchValue} onChange={e => changeVal(e)}><input id="search"></input></label>            
                <button id="search_btn" onClick={() => search(searchValue, source)}>search</button>
            </div>
            <input id="filter"></input>
            <button id="sort_alpha">az</button>
            <button id="sort_rating">rating</button>
            <button id="sort_premier">data</button>
        </div>
    )
}

const mapStateToProps = state => ({
    searchValue: state.searchValue
})

const mapDispatchToProps = dispatch => ({
    changeVal: e => dispatch(changeValue(e.target.value)),
    search: (searchValue, source) => dispatch(requestApi(searchValue, source))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchSort);
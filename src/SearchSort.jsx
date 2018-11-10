import React from 'react';
import { connect } from 'react-redux';
import { filter, changeFilterVal, changeSearchVal, requestApi, sortBy } from './redux/actions';

const SearchSort = ({ sortBy, search, source, searchValue, filterValue, changeSearchVal, changeFilterVal, filter }) => {
	return (
		<div>
			<h3>{source === 'browserData' && "Search &"} Sort</h3>
			<div>                
				<input id="search" disabled={source === 'browserData' ? false : true} autofocus="true" value={searchValue} onChange={e => changeSearchVal(e)}></input>                         
				<button id="search_btn" disabled={source === 'browserData' ? false : true} onClick={() => search(searchValue, source)}>search</button>
			</div>
            
			<div onClick={e => sortBy(e.target.value, source)}>
                <label for='sort_title'><input type='radio' value='best_book_title' name='sort' id="sort_title"/>title</label>
                <label for='sort_author'><input type='radio' value='best_book_author_name' name='sort' id="sort_author"/>author</label>
				<label for='sort_rating'><input type='radio' value='average_rating' name='sort' id="sort_rating"/>rate</label>
				<label for='sort_year'><input type='radio' value='original_publication_year' name='sort' id="sort_year"/>premier</label>
			</div>        
			<div>
                <input 
                onFocus={e => e.target.value = ""} 
                defaultValue="filter by" 
                id="filter" 
                value={filterValue} 
                onChange={
					e => {
						changeFilterVal(e); 
						filter(filterValue, source)
					}
				}></input>

				<label for='filter_title'><input type='radio' value='best_book_title' name='filter' id='filter_title'/>title</label>
				<label for='filter_author'><input type='radio' value='best_book_author_name' name='filter' id='filter_author'/>author</label>
			</div>

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
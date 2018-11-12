import React from 'react';
import { connect } from 'react-redux';
import { filter, changeFilterVal, changeSearchVal, requestApi, sortBy } from './redux/actions';

const SearchSort = ({ sortBy, search, source, searchValue, filterValue, changeSearchVal, changeFilterVal, filter }) => {
	var testRef = React.createRef()
	return (
		<div>
			<h3>{source === 'browserData' && "Search &"} Sort</h3>
			<div onKeyPress={e => {if(e.keyCode === 13 || e.which === 13) return search(searchValue, source)} }>                
				<input 
					id="search" 
					placeholder="title, author or ISBN" 
					disabled={source === 'browserData' ? false : true} 
					autoFocus 
					value={searchValue} 
					onChange={e => changeSearchVal(e)}>
				</input>                         
				<button id="search_btn" disabled={source === 'browserData' ? false : true} onClick={() => search(searchValue, source)}>search</button>
			</div>          
			<p>sort by:</p>  
			<div onClick={e => sortBy(e.target.value, source)}>
                <label htmlFor='sort_title'><input type='radio' value='best_book_title' name='sort' id="sort_title"/>title</label>
                <label htmlFor='sort_author'><input type='radio' value='best_book_author_name' name='sort' id="sort_author"/>author</label>
				<label htmlFor='sort_rating'><input type='radio' value='average_rating' name='sort' id="sort_rating"/>rate</label>
				<label htmlFor='sort_year'><input type='radio' value='original_publication_year' name='sort' id="sort_year"/>premier</label>
			</div>
			<p>filter by:</p>        
			<div>
                <input 
				//onFocus={e => e.target.value = ""} 
                //defaultValue="filter by" 
					placeholder="start typing"				
					value={filterValue} 
					id="filter" 
					onChange={
						e => {
							changeFilterVal(e); 
							filter(testRef.current.value, source)						
						}
				}></input>
				<label htmlFor='filter_title'><input ref={testRef} type='radio' value='best_book_title' name='filter' id='filter_title'/>title</label>
				<label htmlFor='filter_author'><input ref={testRef} type='radio' value='best_book_author_name' name='filter' id='filter_author'/>author</label>
			</div>
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
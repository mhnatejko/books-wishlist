import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
	changeFilterGroup,
	changeFilterVal, 
	changeSearchVal, 
	filter, 	
	requestApi, 
	sortBy 
} from './redux/actions';

const SearchSort = ({ 
	source,
	filterGroup,
	filterValue, 
	searchValue, 
	changeFilterGroup,
	changeFilterVal, 
	changeSearchVal,
	filter,
	search,
	sortBy	
}) => {
	
	return (
		<div className='search-sort'>
			<h3>{source === 'browserData' && 'Search &'} Sort</h3>
			<div className='search-sort__form'> 
				<div 
					className='search-sort__search-panel'
					onKeyPress={e => {if(e.keyCode === 13 || e.which === 13) return search(searchValue, source)}}
				>                
					<input 
						className="search-sort__btn--search" 
						type="text"
						placeholder="title, author or ISBN" 
						disabled={source === 'browserData' ? false : true} 
						autoFocus 
						value={searchValue} 
						onChange={e => changeSearchVal(e)}>
					</input>                         
					<button id="search_btn" disabled={source === 'browserData' ? false : true} onClick={() => search(searchValue, source)}>search</button>
				</div>  

				<div className='search-sort__sort-panel'>        
					<p className='search-sort__etiquette' >sort by:</p>  
					<div onClick={e => sortBy(e.target.value, source)}>
						<label htmlFor='sort_title'><input type='radio' value='best_book_title' name='sort' id="sort_title"/>title</label>
						<label htmlFor='sort_author'><input type='radio' value='best_book_author_name' name='sort' id="sort_author"/>author</label>
						<label htmlFor='sort_rating'><input type='radio' value='average_rating' name='sort' id="sort_rating"/>rate</label>
						<label htmlFor='sort_year'><input type='radio' value='original_publication_year' name='sort' id="sort_year"/>premier</label>
					</div>
				</div>

				<div className='search-sort__filter-panel'>
					<p className='search-sort__etiquette' >filter by:</p> 	
					<div onClick={e => changeFilterGroup(e)} >
						<label htmlFor='filter_title'><input checked type='radio' value='best_book_title' name='filter' id='filter_title'/>title</label>
						<label htmlFor='filter_author'><input  type='radio' value='best_book_author_name' name='filter' id='filter_author'/>author</label>
					</div>
					<input 
						//onFocus={e => e.target.value = ""} 
						//defaultValue="filter by" 
						className="search-sort__btn--filter"	
						type="text"
						placeholder="start typing"				
						value={filterValue} 
						onChange={
							e => {
								changeFilterVal(e); 
								filter(filterGroup, e.target.value, source);
								console.log(filterGroup, e.target.value, source)
							}
						}
					></input>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	filterGroup: state.filterGroup,
	filterValue: state.filterValue,
	searchValue: state.searchValue	
});

const mapDispatchToProps = dispatch => ({
	changeFilterGroup: e => dispatch(changeFilterGroup(e.target.value)),
	changeFilterVal: e => dispatch(changeFilterVal(e.target.value)),
	changeSearchVal: e => dispatch(changeSearchVal(e.target.value)),	
	filter: (filterGroup, filterValue, source) => dispatch(filter(filterGroup, filterValue, source)),
	search: (searchValue, source) => dispatch(requestApi(searchValue, source)),
	sortBy: (keyWord, source) => dispatch(sortBy(keyWord, source))
});

SearchSort.propTypes = {
	source: PropTypes.string,
	filterValue: PropTypes.string, 
	searchValue: PropTypes.string, 
	changeFilterGroup: PropTypes.func,
	changeFilterVal: PropTypes.func, 
	changeSearchVal: PropTypes.func,
	filter: PropTypes.func,
	search: PropTypes.func,
	sortBy: PropTypes.func	
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSort);
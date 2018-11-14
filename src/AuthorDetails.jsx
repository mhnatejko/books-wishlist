import React from 'react';
import { connect } from 'react-redux';  
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestApi } from './redux/actions';
import SpinnerComponent from './SpinnerComponent';


const AuthorDetails = ({ data, loading, search }) => {
	return (
		data.length < 0 ?
			<div>
				<h1>Informations about author</h1>
				{
					loading 
						? 
						<SpinnerComponent />
						:
						<div>
							<img src={data.image_url} alt={data.name}/>
							<p>{data.name}</p>
							{data.born_at && <p>{data.born_at} - {data.died_at}</p>}
							<div dangerouslySetInnerHTML={{__html: data.about}}/>    
							<p>{data.hometown}</p>
							<p>{data.works_count}</p>
							{data.gender && <p>some of {data.gender === 'male' ? 'his': 'her'} publications</p>}
							{data.books && <div>{data.books.map(book => 
								<Link to='/browser'>
									<p onClick={() => search(book, 'browserData')}>{book}</p>
								</Link>
							)}</div>}          
							{data.link && <a href={data.link}>author on goodreads</a>}
						</div>
				}  
            
			</div>
			: <p>No author choosed</p>
	);
} ;

const mapStateToProps = state => ({
	data: state['authorDetails'].data,
	loading: state['authorDetails'].loading
});

const mapDispatchToProps = dispatch => ({
	search: (searchValue, source) => dispatch(requestApi(searchValue, source)),
});

AuthorDetails.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.bool,
	search: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetails);
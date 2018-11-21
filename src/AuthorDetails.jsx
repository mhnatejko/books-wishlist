import React from 'react';
import { connect } from 'react-redux';  
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestApi } from './redux/actions';
import SpinnerComponent from './SpinnerComponent';


const AuthorDetails = ({ data, loading, quotes, search }) => {
	return (
		<section className='main author'>
			{
				!!data ?
					<div>
						<h1>Informations about author</h1>
						{
							!!loading 
								? 
								<SpinnerComponent />
								:
								<div>
									<div className="author__main-info">
										<img src={data.image_url} alt={data.name}/>
										<div>
											<h3>{data.name}</h3>
											{!!data.born_at && <p>({data.born_at} - {data.died_at})</p>}
											<br/>
											<p>{data.hometown}</p>
											
										</div>
									</div>
									<br/>
									<div className='author__description' dangerouslySetInnerHTML={{__html: data.about}}/>    
									<br/>
									{!!data.gender && <p>Some of {data.gender === 'male' ? 'his': 'her'} publications:</p>}
									{!!data.books && <div>{data.books.map(book => 
										<Link to='/browser'>
											<p onClick={() => search(book, 'browserData')}>{book}</p>
										</Link>
									)}</div>}  
									<br/>        
									<p>Check {data.works_count} records of {data.link && <a href={data.link}>author on goodreads</a>}</p>
									<br/>
									<div className='author__quotes'>
										{!!quotes && quotes.length > 0 && <blockquote>"{quotes[Math.floor(Math.random() * quotes.length)].quote}"	</blockquote> }
									</div>
								</div>								
						}  				
					</div>
					: <p>No author choosed</p> 
			}
		</section>
		
		
		
	);
};

const mapStateToProps = state => ({
	data: state['authorDetails'].data,
	loading: state['authorDetails'].loading,
	quotes: state['authorDetails'].quotes.quotes 
});

const mapDispatchToProps = dispatch => ({
	search: (searchValue, source) => dispatch(requestApi(searchValue, source)),
});

AuthorDetails.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.bool,
	quotes: PropTypes.array,
	search: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetails);
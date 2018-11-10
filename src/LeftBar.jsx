import React, { Component} from 'react';
import { connect } from 'react-redux';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';
import { requestApi } from './redux/actions';


const source = 'leftBarData';
const searchValue = 'poniedzialek';
class LeftBar extends Component {

	componentDidMount(){
		this.props.search(searchValue, source)
	}
	render(){
		return (
			<div>
				<h2>Left</h2> 
				{
					this.props.loading 
						? 
						<SpinnerComponent />
						:
						<BookCards source={source} books={this.props.books}/>
				}      
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loading: state[source].loading,
	books: state[source].books,
});


const mapDispatchToProps = dispatch => ({
	search: (searchValue, source) => dispatch(requestApi(searchValue, source))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);

/*
const LeftBar = ({ books, loading}) => {
	
	return (
		<div>
			<h2>Left</h2> 
			{
				loading 
					? 
					<SpinnerComponent />
					:
					<BookCards books={books}/>
			}      
		</div>
	);
};

const mapStateToProps = state => ({
	loading: state.leftBarData.loading,
	books: state.leftBarData.books,
});

export default connect(mapStateToProps)(LeftBar);

*/


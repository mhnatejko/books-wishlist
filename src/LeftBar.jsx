import React, { Component} from 'react';
import { connect } from 'react-redux';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';
import { requestApi } from './redux/actions';
import { todayDay } from './redux/day_of_the_week_function';

const source = 'leftBarData';
const searchValue = todayDay();
class LeftBar extends Component {

	componentDidMount(){
		this.props.search(searchValue, source)
	}
	render(){
		return (
			<div>
				<h2>Left</h2> 
				<h3>Suggestions for today</h3>
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



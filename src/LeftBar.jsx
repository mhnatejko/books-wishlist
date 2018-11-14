import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApi, changeLeftBarValue, changeFilterVal } from './redux/actions';
import { dayOrMonth } from './special_functions/day_of_the_week_function';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';

const source = 'leftBarData';
class LeftBar extends Component {
	componentDidMount(){
		this.props.search(this.props.leftBarValue, source);
		let dayOrMonthInterval = setInterval(() => {
			this.props.changeLeftBarValue(dayOrMonth());
			this.props.search(this.props.leftBarValue, source);
		}, 60000);
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
};

const mapStateToProps = state => ({
	books: state[source].books,
	leftBarValue: state.leftBarValue,
	loading: state[source].loading,	
});

const mapDispatchToProps = dispatch => ({	
	changeLeftBarValue: value => dispatch(changeLeftBarValue(value)),
	search: (searchValue, source) => dispatch(requestApi(searchValue, source))
});

LeftBar.propTypes = {
	books: PropTypes.array,
	leftBarValue: PropTypes.string,
	loading: PropTypes.bool,
	changeLeftBarValue: PropTypes.func,
	search: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);



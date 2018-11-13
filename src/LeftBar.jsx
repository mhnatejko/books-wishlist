import React, { Component} from 'react';
import { connect } from 'react-redux';
import BookCards from './BookCards';
import SpinnerComponent from './SpinnerComponent';
import { requestApi, changeLeftBarValue } from './redux/actions';
import { dayOrMonth } from './redux/day_of_the_week_function';

const source = 'leftBarData';
class LeftBar extends Component {

	componentDidMount(){
		this.props.search(this.props.leftBarValue, source);
		let dayOrMonthInterval = setInterval(() => {
			this.props.changeLeftBarValue(dayOrMonth())
			this.props.search(this.props.leftBarValue, source)
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
}

const mapStateToProps = state => ({
	loading: state[source].loading,
	books: state[source].books,
	leftBarValue: state.leftBarValue
});

const mapDispatchToProps = dispatch => ({
	search: (searchValue, source) => dispatch(requestApi(searchValue, source)),
	changeLeftBarValue: value => dispatch(changeLeftBarValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);



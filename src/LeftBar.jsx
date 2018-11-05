import React from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import BookCards from './BookCards';
import { loadBooks } from './redux/actions';

const LeftBar = ({ fetching, loadBooks}) => {
    return (
        <div>
            <h2>Left</h2>
            <button onClick={loadBooks}>load</button> 
			{
				fetching ? 
					<Spinner name="circle" color="black" fadeIn="none"/>
					:
					<BookCards />
			}      
        </div>
    );
};

const mapStateToProps = state => ({
	fetching: state.fetching
});

const mapDispatchToProps = dispatch => ({
	loadBooks: () => dispatch(loadBooks())
})


export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
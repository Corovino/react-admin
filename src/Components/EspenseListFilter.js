import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';


const onChangeHandler = (e , props) => {
    const inputValue = e.target.value;
    props.dispatch(setTextFilter(inputValue));
}

const handleDataBy = (e, props) => {
    console.log(e.target.value);
    switch(e.target.value){
       case"date":
          props.dispatch(sortByAmount());
       break;
       case"amount":
          props.dispatch(sortByDate());
       break;

    }
}

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={ e => onChangeHandler(e, props) } />
    <select
        values={props.filters.sortBy} 
        onChange={ e => handleDataBy(e, props) }> 
       <option  value="date">Date</option>
       <option  value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

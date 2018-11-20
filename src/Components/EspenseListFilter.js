import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';


const onChangeHandler = (e , props) => {
    const inputValue = e.target.value;
    props.dispatch(setTextFilter(inputValue));
}

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={ e => onChangeHandler(e, props) } />
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

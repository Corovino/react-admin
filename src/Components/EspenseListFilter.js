import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseLisFilter = (props) => (
    <div>
        <input type="text" value={props.filters.text}  onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
        } }/> 
    </div>
);

const _handleValue = (e, props) => {
    props.dispatch(setTextFilter(e.target.value));
};

const mapStateProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateProps)(ExpenseLisFilter);
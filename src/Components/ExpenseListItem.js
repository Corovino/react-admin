  
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

  const ExpenseLisItem = ({ dispatch, id, description, amount, createAt}) => (
      <div>
          <h3>{description}</h3>
          <p>{amount} - {createAt}</p>
          <button onClick={ () => {
              console.log(id);
                 dispatch(removeExpense({ id }));
              }
          }>Remove</button>
      </div>
  );

  export default connect()(ExpenseLisItem);
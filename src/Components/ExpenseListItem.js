  
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom'

  const ExpenseLisItem = ({ dispatch, id, description, amount, createAt}) => (
      <div>
          <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
          </Link>  
          <p>{amount} - {createAt}</p>
          <button onClick={ () => {
              console.log(id);
                 dispatch(removeExpense({ id }));
              }
          }>Remove</button>
      </div>
  );

  export default connect()(ExpenseLisItem);
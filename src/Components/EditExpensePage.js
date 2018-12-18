import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';



const EditExpensePage = (props) => {
   
    return (
       <div>
        <ExpenseForm 
          expense={props.expense}
          onSubmit={(expense) => {
              console.log(props.expense.id);
              props.dispatch(editExpense(props.expense.id, props.expense))  
              props.history.push('/')
          }}
        />  
       </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);
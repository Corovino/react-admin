import React from 'react';
import ExpenseList from'./ExpenseList';
import ExpenseListFilter from './EspenseListFilter';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component!
    <ExpenseListFilter />
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;

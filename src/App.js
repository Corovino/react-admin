import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import logo from './logo.svg';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

class App extends Component {
    render() {
        return ( 
        <div className = "App" >
            <AppRouter/>
        </div>
        );
    }
}

export default App;
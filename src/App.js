import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.scss';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import logo from './logo.svg';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('Water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log("f",state);

class App extends Component {
    render() {
        return ( 
        <div className = "App" >
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </div>
        );
    }
}

export default App;
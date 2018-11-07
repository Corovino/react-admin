import {  createStore, combineReducers  } from 'redux';








//Expenses Reducers

const expensesReducersDefaulstate = [];

const expensesReducers = (state = expensesReducersDefaulstate, action) => {

    switch (action.type) {

        case 'ADD_EXPENSE':
            return [...state, action.expesive];
            break;
        case 'REMOVE_EXPENSE':
            return state.filter( ({ id })  =>  id !== action.id )  
            break;
        case 'EDIT_EXPENSE':
            return state.map(  (expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            } )
            break;
        default:
            return state;
            break;
    }

}

const filterReducerDefaulState = [{
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}]


const filtersReducers = (state = filterReducerDefaulState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILER':
            return {
                ...state,
                text:action.text
            }
            break;
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy:'amount'
            }
            break;
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
            break;   
        case 'SET_START_DATE':
            return {
                ...state, 
                startDate:action.startDate
            }
            break;
        case 'SET_END_DATE':
            return {
                ...state,
                startDate: action.endtDate
            }
            break;
        default:
            return state;
            break;
    }

}


const  store = createStore(
        combineReducers({
            expenses: expensesReducers,
            filters: filtersReducers
        })
);

const getvisibleExpenses = ( expenses, {  text, sortBy, startDate, endDate  } ) => {
    return expenses.filter( expense => {
         const startDateMatch   = typeof startDate !== 'number' ||  expense.createAt >= startDate;
         const endDateMatch     = typeof endDate !== 'number' || expense.createAt >= endDate;
         const textMatch        = expense.description.toLowerCase().includes(text.toLowerCase());;

               return  startDateMatch && endDateMatch && textMatch;
    }).sort( ( a, b ) => {
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1;
        }else if ( sortBy === 'amount' ){
            return a.amount < b.amount ? 1 : -1;
        }
    } );
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getvisibleExpenses(state.expenses, state.filters)
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description :'rent',   amount:100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300 }));
store.dispatch(removeExpense({ id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, { amount:500 } ));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter('date'));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(1250));



const demoState = {
    expenses : [{
        id: 'kjhfksdjhfkdsf',
        description: "January Rent",
        note: "this was the final payment for that address",
        ammount: 54500,
        createAt:0        
    }],
    filters:{
        text:"rent",
        sortBy: "amount",
        startDate: undefined,
        endDate:undefined
    }
}
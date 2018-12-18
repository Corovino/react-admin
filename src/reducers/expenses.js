//Expenses Reducers

const expensesReducersDefaulstate = [];

export default (state = expensesReducersDefaulstate, action) => {

    switch (action.type) {

        case 'ADD_EXPENSE':
            return [...state, action.expense];
            break;
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
            break;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                console.log("reducers", action.updates);
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
            break;
        default:
            return state;
            break;
    }

}
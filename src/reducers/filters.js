const filterReducerDefaulState = [{
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}]


export default  (state = filterReducerDefaulState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            console.log("fa",action);
            return {
                ...state,
                text: action.text
            }
            break;
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
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
                startDate: action.startDate
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
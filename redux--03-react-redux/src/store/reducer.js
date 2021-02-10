const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'INCREMENT':
            
                const newState =  Object.assign({}, state);
                newState.counter = state.counter + 1;
                return newState;              
            
         case 'DECREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
         case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
         case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: state.counter})
            }
    }
    return state;  
       
};

export default reducer;
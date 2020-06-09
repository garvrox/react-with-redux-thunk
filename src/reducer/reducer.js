const initialState = {
    count: 10,
    history: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UP':
            return {
                ...state,
                count: state.count + action.val || 0,
                history: state.history.concat({ id: Math.random(), count: state.count - action.val || 0 }),
                loading: false
            }
        case 'DOWN':
            return {
                ...state,
                count: state.count - action.val || 0,
                history: state.history.concat({ id: Math.random(), count: state.count - action.val || 0 })
            }
        case 'DEL' : 
            return {
                ...state,
                history: state.history.filter((item) => item.id !== action.id)
            }
        case 'RESET':
            return {
                ...state,
                count: 10,
                history: []
            }
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
    }
    return state
};

export default reducer;

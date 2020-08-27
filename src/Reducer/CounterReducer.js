const initialState = {
    counter: 0
};

export default function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, counter: state.counter + 1
            };

        case 'DECREMENT':
            return {
                ...state, counter: state.counter - 1
            };

        default:
            return state
    }
}
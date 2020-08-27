import { createStore } from 'redux'
import CounterReducer from '../Reducer/CounterReducer'

const store = createStore(CounterReducer)

export default store
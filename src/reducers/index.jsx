import counter from './counter';
import loggedReducer from './isLogged';
import reducer from './data'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counter,
    loggedReducer: loggedReducer,
    data: reducer
})

export default allReducers;
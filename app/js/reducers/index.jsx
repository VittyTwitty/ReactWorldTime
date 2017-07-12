import { combineReducers } from 'redux';
import clocks from './clocks';
import clocksDescription from './clocksDescription';


export default combineReducers({
    clocks,
    clocksDescription
})
import {combineReducers} from 'redux';
import CellsReducer from './cells_reducer';

const rootReducer = combineReducers({
    cells: CellsReducer
});

export default rootReducer;
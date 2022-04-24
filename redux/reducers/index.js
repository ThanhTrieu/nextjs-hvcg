import { combineReducers } from 'redux';
import { movieReducer } from './movies';
import { detailMovieReducer } from './detail';

const rootReducer = combineReducers({
    movieReducer,
    detailMovieReducer
});
export default rootReducer;
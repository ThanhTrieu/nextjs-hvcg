import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/movies';
import { api } from '../services/movies';

function* searchMovieSaga({keyword, page}){
    try {
        yield put(actions.startSearch(true));
        const data = yield call(api.searchMovies, keyword, page);
        yield put(actions.searchSuccess(data));
    } catch(error){
        yield put(actions.searchFail(error));
    } finally {
        yield put(actions.startSearch(false));
    }
}

export function* watchMovieSaga(){
    yield takeLatest(actions.SEARCH_MOVIES, searchMovieSaga);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/movies';
import { api } from '../services/movies';

function* detailMovieSaga({ id }){
    try {
        yield put(actions.startFindMovieById(true));
        const detail = yield call(api.getDataMoviesById, id);
        if(detail.hasOwnProperty('id')){
            yield put(actions.requestMovieByIdSuccess(detail))
        } else {
            yield put(actions.requestMovieByIdFail({
                cod: 404,
                mess: 'not found movie'
            }));
        }
    } catch(error) {
        yield put(actions.requestMovieByIdFail({
            cod: 500,
            mess: error
        }));
    } finally {
        yield put(actions.startFindMovieById(false));
    }
}

export function* watchDetailSaga(){
    yield takeEvery(actions.REQUEST_MOVIE_ID, detailMovieSaga);
}
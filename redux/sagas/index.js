import { all, call } from 'redux-saga/effects';
import { watchMovieSaga } from './movies';
import { watchDetailSaga } from './detail';

export default function* rootSaga(){
    yield all([
        call(watchMovieSaga),
        call(watchDetailSaga)
    ])
}
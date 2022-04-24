import * as types from '../actions/movies';

const initStateDefault = {
    start: true,
    detailMovie: {},
    errorDetail: null
}

export const detailMovieReducer = (state = initStateDefault, action) => {
    switch(action.type){
        case types.START_REQUEST_MOVIE_ID:
            return {
                ...state,
                ...{ start: action.start}
            }
        case types.REQUEST_MOVIE_ID_SUCCESS:
            return {
                ...state,
                ...{detailMovie: action.detail, errorDetail: null}
            }
        case types.REQUEST_MOVIE_ID_FAIL:
            return {
                ...state,
                ...{ errorDetail: action.error }
            }
        default:
            return state;
    }
}
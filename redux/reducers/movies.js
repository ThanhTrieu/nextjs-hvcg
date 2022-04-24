import * as types from '../actions/movies';

const initDefaultState = {
    loading: null,
    data: {},
    error: null
}

export const movieReducer = (state = initDefaultState, action) => {
    switch(action.type) {
        case types.START_SEARCH_MOVIES:
            return {
                ...state,
                ...{loading: action.start}
            }
        case types.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                ...{data: action.movies, error: null}
            }
        case types.SEARCH_MOVIES_FAIL:
            return {
                ...state,
                ...{error: action.err}
            }
        default:
            return state;
    } 
}
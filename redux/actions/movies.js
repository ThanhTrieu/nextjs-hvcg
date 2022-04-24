export const SEARCH_MOVIES = Symbol('SEARCH_MOVIES');
export const REQUEST_MOVIE_ID = Symbol('REQUEST_MOVIE_ID');

export const START_SEARCH_MOVIES = Symbol('START_SEARCH_MOVIES');
export const SEARCH_MOVIES_SUCCESS = Symbol('SEARCH_MOVIES_SUCCESS');
export const SEARCH_MOVIES_FAIL = Symbol('SEARCH_MOVIES_FAIL');

export const START_REQUEST_MOVIE_ID = Symbol('START_REQUEST_MOVIE_ID');
export const REQUEST_MOVIE_ID_SUCCESS = Symbol('REQUEST_MOVIE_ID_SUCCESS');
export const REQUEST_MOVIE_ID_FAIL = Symbol('REQUEST_MOVIE_ID_FAIL');


export const findDataMovieById = (id) => ({
    type: REQUEST_MOVIE_ID,
    id
});
export const startFindMovieById = (start) => ({
    type: START_REQUEST_MOVIE_ID,
    start
});
export const requestMovieByIdSuccess = (detail) => ({
    type: REQUEST_MOVIE_ID_SUCCESS,
    detail
});
export const requestMovieByIdFail = (error) => ({
    type: REQUEST_MOVIE_ID_FAIL,
    error
});


export const searchMovieByKeyword = (keyword, page = 1) => ({
    type: SEARCH_MOVIES,
    keyword,
    page
});

export const startSearch = start => ({
    type: START_SEARCH_MOVIES,
    start
});
export const searchSuccess = movies => ({
    type: SEARCH_MOVIES_SUCCESS,
    movies
});
export const searchFail = err => ({
    type: SEARCH_MOVIES_FAIL,
    err
});

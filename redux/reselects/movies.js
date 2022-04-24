import { createSelector } from 'reselect';

const movieState = state => state.movieReducer;

export const getLoadingStateMovie = createSelector(
    movieState,
    item => item.loading
);

const getAllDataMovies = createSelector(
    movieState,
    item => item.data
)

export const getTotalPageStateMovie = createSelector(
    getAllDataMovies,
    item => {
        if(item.hasOwnProperty('total_pages')){
            return item.total_pages;
        }
        return 0
    }
)

export const getTotalResultsStateMovie = createSelector(
    getAllDataMovies,
    item => {
        if(item.hasOwnProperty('total_results')){
            return item.total_results;
        }
        return 0
    }
)

export const getDataStateMovie = createSelector(
    getAllDataMovies,
    item => {
        if(item.hasOwnProperty('results')){
            return item.results;
        }
        return null
    }
)
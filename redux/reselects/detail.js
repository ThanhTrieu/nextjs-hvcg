import { createSelector } from 'reselect';

const detailMovieState = state => state.detailMovieReducer;

export const getLoadingDetail = createSelector(
    detailMovieState,
    loading => loading.start
);

export const getMainDataDetail = createSelector(
    detailMovieState,
    data => data.detailMovie
)

export const getDetail = createSelector(
    getMainDataDetail,
    value => ({
        id: value.id,
        original_title: value.original_title,
        title: value.title,
        overview: value.overview,
        poster_path: value.poster_path,
        popularity: value.popularity,
        vote_count: value.vote_count,
        vote_average: value.vote_average,
        status: value.status
    })
)
export const getImagesMovie = createSelector(
    getMainDataDetail,
    item => {
        if(item.hasOwnProperty('images')) {
            if(item.images.hasOwnProperty('backdrops')){
                return item.images.backdrops
            }
        }
        return [];
    }
)
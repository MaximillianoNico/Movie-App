import { SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS } from './types';
import Services from '../../common/services';

export const search = (search = '', page = 1) => {
    return { type: SEARCH_MOVIE, search, page }
};

export const searchSuccess = (payload = []) => {
    return { type: SEARCH_MOVIE_SUCCESS, payload }
};


export const fetchMovieAPI = (s = '', page = 1) => {
    return async (dispatch) => {
        dispatch(search(s, page));
        console.log('test')

        const response = await Services.movie.searchMovie(s, page);

        console.log('response', response);
        if(response){
            return dispatch(searchSuccess(response.data.Search));
        }
    }
}
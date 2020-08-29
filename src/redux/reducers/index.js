import { SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE } from '../actions/types';
const initialState = {
  s: 'batman',
  page: 1,
  movie: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        s: action.search,
        page: action.page,
      };
    case SEARCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        // movie: state.movie.concat(action.payload)
        movie: action.payload,
      });
  }
  return state;
};

export default rootReducer;
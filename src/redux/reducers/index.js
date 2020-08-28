import { SEARCH_MOVIE_SUCCESS } from '../actions/types';
const initialState = {
  movie: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        movie: state.movie.concat(action.payload)
      });
  }
  return state;
};

export default rootReducer;
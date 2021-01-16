import type { AllActions } from '../actions';

const currentMovie = function (
  state: Movie | null = null,
  action: AllActions
): Movie | null {
  console.log(action.type, action);

  switch (action.type) {
    case 'MOVIE-LOADED':
      return action.payload;

    case 'MOVIE-PROP-CHANGED':
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      } as Movie;

    default:
      return state;
  }
};

export default currentMovie;

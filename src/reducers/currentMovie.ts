import type { AllActions } from '../actions';

const currentMovie = function (
  state: Movie | null = null,
  action: AllActions
): Movie | null {
  console.log(action.type, action);

  switch (action.type) {
    case 'MOVIE-LOADED':
      return { ...action.payload, rating: 10 * Math.random() };

    case 'MOVIE-PROP-CHANGED':
      if (state) {
        // Update the movie
        return {
          ...state,
          [action.payload.prop]: action.payload.value,
        };
      } else {
        // Can't change a movie we don't have yet
        return null;
      }

    default:
      return state;
  }
};

export default currentMovie;

import type { AllActions } from '../actions';

const movies = function (state: Movie[] = [], action: AllActions): Movie[] {
  console.log(action.type, action);

  switch (action.type) {
    case 'MOVIES-LOADED':
      return action.payload;

    default:
      return state;
  }
};

export default movies;

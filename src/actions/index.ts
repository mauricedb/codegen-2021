import type { Dispatch } from 'redux';

export const moviesLoaded = (movies: Movie[]) => {
  return {
    type: 'MOVIES-LOADED' as const,
    payload: movies,
  };
};

export type MoviesLoaded = ReturnType<typeof moviesLoaded>;

export const movieLoaded = (movie: Movie) => {
  return {
    type: 'MOVIE-LOADED' as const,
    payload: movie,
  };
};

export type MovieLoaded = ReturnType<typeof movieLoaded>;

export const currentMoviePropChanged = (
  prop: keyof Movie,
  value: string | number
) => {
  return {
    type: 'MOVIE-PROP-CHANGED' as const,
    payload: {
      prop,
      value,
    },
  };
};

export type CurrentMoviePropChanged = ReturnType<
  typeof currentMoviePropChanged
>;

export const loadMovies = () => async (dispatch: Dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ORIGIN}/popular-movies`
  );

  dispatch(moviesLoaded(await response.json()));
};

export const loadMovie = (id: string) => async (dispatch: Dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ORIGIN}/popular-movies/${id}`
  );

  dispatch(movieLoaded(await response.json()));
};

export type AllActions = MoviesLoaded | MovieLoaded | CurrentMoviePropChanged;

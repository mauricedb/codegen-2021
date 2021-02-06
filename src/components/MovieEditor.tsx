import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../reducers';

import Loading from './Loading';
import TextInput from './TextInput';
import { currentMoviePropChanged, loadMovie } from '../actions';

type Params = {
  id: string;
};

const MovieEditor: React.FC = () => {
  const { id } = useParams<Params>();
  const { push } = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMovie(id));
  }, [dispatch, id]);

  const movie = useSelector<RootState, Movie | null>(
    (state) => state.currentMovie
  );

  const onChange = React.useCallback(
    (prop, value) => {
      dispatch(currentMoviePropChanged(prop, value));
    },
    [dispatch]
  );

  const saveMovie = React.useCallback(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_ORIGIN}/popular-movies/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'put',
        body: JSON.stringify(movie),
      }
    );
    if (response.ok) {
      push('/movies');
    }
  }, [id, movie, push]);

  if (!movie) {
    return <Loading />;
  }

  return (
    <form className="wa s-validated">
      <TextInput
        label="Title"
        value={movie.title}
        onChange={(e) => onChange('title', e.currentTarget.value)}
        isInvalid={!movie.title}
        invalidMessage="The movie title is required"
      />
      <div className="form-group">
        <label>Overview</label>
        <textarea
          className="form-control"
          value={movie.overview}
          rows={5}
          onChange={(e) => onChange('overview', e.target.value)}
        />
      </div>
      <TextInput
        label="Vote"
        value={movie.vote_average}
        onChange={(e) => onChange('vote_average', +e.target.value)}
      />
      <TextInput
        label="Release date"
        value={movie.release_date}
        onChange={(e) => onChange('release_date', e.target.value)}
      />
      <TextInput
        label="Rating"
        value={movie.rating}
        onChange={(e) => onChange('rating', e.target.value)}
      />
      <div className="form-group">
        <img
          src={`//image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="btn-group">
        <button
          onClick={saveMovie}
          type="button"
          disabled={!movie.title}
          className="btn btn-primary"
        >
          Save
        </button>
        <Link to={`/movies`} className="btn btn-danger">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default MovieEditor;

import React from 'react';
import { Link } from 'react-router-dom';

type MovieRowProps = {
  movie: Movie;
};

const MovieRow: React.FC<MovieRowProps> = ({ movie }) => (
  <tr id={`movie-${movie.id}`} aria-label={movie.title}>
    <td className="title">{movie.title}</td>
    <td>{movie.vote_average}</td>
    <td style={{ width: 1 }}>
      <Link
        to={`/movie/${movie.id}`}
        className="btn btn-default btn-xs edit-button font-weight-bold"
      >
        Edit
      </Link>
    </td>
  </tr>
);

export default MovieRow;

import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <img src={movie.image} alt={movie.image} />
      <div className="movie__data">
        <h3 className="movie__title">{movie.title}</h3>
        <h3 className="movie__rating">{movie.userRating}</h3>
        <h3 className="movie__year">{movie.year}</h3>
      </div>
    </div>
  );
}

export default MovieCard;

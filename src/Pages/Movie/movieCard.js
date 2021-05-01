import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <img src={movie.image} alt={movie.title} />
      <div className="movie__data">
        <h3 className="movie__title">
          {movie.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
        </h3>
        <p className="movie__rating">
          <span>평점</span> {movie.userRating}/10
        </p>
        <p className="movie__year">
          <span>개봉일</span> {movie.year}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;

import { useEffect, useState } from "react";
import "./movie.scss";
import Search from "./search";
import MovieCard from "./movieCard";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const searchMovie = () => {
    const ID_KEY = "BTsi_d4xdv3sS3NdDUqb";
    const SECRET_KEY = "G1xA0ntNDn";
    const MOVIE_API_URL = "/v1/search/movie.json";

    try {
      setLoading(true);
      setError(null);
      axios
        .get(MOVIE_API_URL, {
          params: { query: inputValue, display: 10 },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        })
        .then((res) => {
          setMovies(res.data.items);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovie();
  }, [inputValue]);

  return (
    <div className="movieContainer">
      <p className="movie_search">영화 검색</p>
      <Search
        searchMovie={searchMovie}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <section className="movieSection">
        {loading && !error ? (
          <div>loading...</div>
        ) : error ? (
          <div className="errorMessage">{error}</div>
        ) : (
          movies.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
        )}
      </section>
    </div>
  );
};
// 로딩이 true, error가 false면 div 로딩을 보여줌
// 에러가 트루면 error메세지 보여줌
// 둘 ㄷ

export default Movie;

import { useEffect, useState } from "react";
import "./movie.scss";
import Search from "./search";
import MovieCard from "./movieCard";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("ironman");
  const [error, setError] = useState(null);

  useEffect(() => {
    getSearchMovie();
  }, []);

  const getSearchMovie = async () => {
    const ID_KEY = "BTsi_d4xdv3sS3NdDUqb";
    const SECRET_KEY = "G1xA0ntNDn";
    try {
      if (inputValue === "") {
        setMovies([]);
        loading(true);
      } else {
        const {
          data: { items },
        } = await axios.get("https://openapi.naver.com/v1/search/movie.json", {
          params: { query: inputValue, display: 10 },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });
        setMovies(items);
        console.log(items, "뭐냐");
        // setMovies(items);
        loading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const ID_KEY = "BTsi_d4xdv3sS3NdDUqb";
  //   const SECRET_KEY = "G1xA0ntNDn";
  //   const MOVIE_API_URL = "https://openapi.naver.com/v1/search/movie.json";

  //   try {
  //     // 왜 이 문법이 필요할까?없으면 데이터를 받아올 수가 없다.
  //     if (inputValue === "") {
  //       setMovies([]);
  //       loading(false);
  //     } else {
  //       axios
  //         .get(MOVIE_API_URL, {
  //           params: { query: inputValue, display: 10 },
  //           headers: {
  //             "X-Naver-Client-Id": ID_KEY,
  //             "X-Naver-Client-Secret": SECRET_KEY,
  //           },
  //         })
  //         .then((res) => {
  //           setMovies(res.data);
  //           console.log(res.data, "뭐냐");
  //           loading(false);
  //         });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //   }
  // }, []);

  return (
    <div className="movieContainer">
      <p>영화 검색</p>
      <Search inputValue={inputValue} setInputValue={setInputValue} />
      <section className="movieSection">
        {loading && <span>loading...</span>}
        {/* {error && <div className="errorMessage">{error}</div>} */}
        {movies.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default Movie;

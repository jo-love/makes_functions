import React from "react";

function Search({ searchMovie, inputValue, setInputValue }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie();
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input_search"
        type="text"
        placeholder="영화를 검색하세요..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
}

export default Search;

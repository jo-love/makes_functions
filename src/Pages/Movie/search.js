import { useState } from "react";
import React from "react";

function Search({ inputValue, setInputValue }) {
  // const [imputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value, "target");
    console.log(inputValue, "input");
  };
  return (
    <form>
      <input
        className="input_search"
        type="text"
        placeholder="영화를 검색하세요..."
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;

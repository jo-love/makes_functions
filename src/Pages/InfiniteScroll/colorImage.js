// import { useState, useEffect, useCallback } from "react";

const ColorImage = ({url}) => {
  return (
    <>
      <img className="thumbnail" src={url} alt="thumbnail" />
    </>
  );
};

export default ColorImage;

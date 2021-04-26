import "./itemContainer.scss";
import { useState } from "react";

const ItemContainer = ({ color, img, checkItem }) => {
  const [checked, setChecked] = useState(false);

  const checkAnswer = () => {
    setChecked(!checked);
    checkItem();
  };

  return (
    <>
      <div
        style={{ backgroundColor: checked ? "pink" : "" }}
        className="itemBox"
        onClick={checkAnswer}
      >
        <div>
          <img src={img} alt="color" />
        </div>
        <div>
          <h2>{color}</h2>
        </div>
      </div>
    </>
  );
};

export default ItemContainer;

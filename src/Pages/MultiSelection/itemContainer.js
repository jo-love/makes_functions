import "./itemContainer.scss";
import { useState } from "react";

const ItemContainer = ({ id, color, img }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState("");

  const checkAnswer = (id) => {
    const selectedID = [id];
    // setSelectedItems(...selectedItems, ...selectedID);
    console.log(setSelectedItems(...selectedItems, ...selectedID));
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div
        style={{ backgroundColor: isSelected ? "pink" : "" }}
        className="itemBox"
        onClick={() => checkAnswer(id)}
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

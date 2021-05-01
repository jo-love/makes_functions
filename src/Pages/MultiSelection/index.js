import { useState, useEffect } from "react";
import axios from "axios";
import ItemContainer from "./itemContainer";

const MultiSelection = () => {
  const [productAvailable, setProductAvailable] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Data/MultiSelection.json").then((res) => {
      setProductAvailable(res.data.productAvailable);
    });
  }, []);

  // TODO 코드리뷰 -> 직관적으로 바로 id를 set해주고 있음
  const addItem = (color) => {
    setSelectedItems([...selectedItems, color]);
  };

  // 선택한 컬러가 selectedItems배열에 이미 있으면 해당값을 삭제해라.
  const removeItem = (color) => {
    setSelectedItems(
      selectedItems.filter((selectedColor) => selectedColor !== color)
    );
  };

  // selectedItems배열에 있는지 없는지 검증하여 additem 혹은 romveitem실행
  const checkItem = (color) => {
    if (selectedItems.indexOf(color) >= 0) {
      return removeItem(color);
    } else {
      return addItem(color);
    }
  };

  return (
    <section>
      <h1>색상을 골라주세요!(다중선택 가능)</h1>
      {productAvailable.map((el, idx) => {
        return (
          <ItemContainer
            key={idx}
            id={el.id}
            color={el.color}
            img={el.img}
            checkItem={() => checkItem(el.color)}
          />
        );
      })}
      <h1> {selectedItems}를 고르셨습니다.</h1>
    </section>
  );
};


export default MultiSelection;

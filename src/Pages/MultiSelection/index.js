import { useState, useEffect } from "react";
import axios from "axios";
import ItemContainer from "./itemContainer";

const MultiSelection = () => {
  const [productAvailable, setProductAvailable] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Data/MultiSelection.json").then((res) => {
      setProductAvailable(res.data.productAvailable);
    });
  }, []);

  return (
    <section>
      <h1>색상을 골라주세요!(다중선택 가능)</h1>
      {productAvailable.map((el, idx) => {
        return (
          <ItemContainer key={idx} id={el.id} color={el.color} img={el.img} />
        );
      })}
    </section>
  );
};

export default MultiSelection;

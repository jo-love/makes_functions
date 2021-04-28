import { useEffect, useRef, useState } from "react";

const UseIO = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);
  const { root, rootMargin, threshold } = options || {};

  useEffect(() => {
    if (elements.length) {
      console.log("---connecting observer---");
      // IO 생성
      observer.current = new IntersectionObserver(
        (ioEntries) => {
          setEntries(ioEntries);
        },
        {
          threshold,
          root,
          rootMargin,
        }
      );

      elements.forEach((element) => {
        observer.current.observer(element);
      });
    }
    return () => {
      if (observer.current) {
        console.log("---disconnecting observer---");
        observer.current.disconnect();
      }
    };
  }, [elements, root, rootMargin, threshold]);

  return [observer.current, setElements, entries];
};

export default UseIO;

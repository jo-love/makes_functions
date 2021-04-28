// import axios from "axios";
// import { useEffect, useState, useRef, useCallback } from "react";
// import ColorImage from "./colorImage";
// import UseIO from "./useIO";
// import "./infiniteScroll.scss";

// const ScrollContainer = () => {
//   // contents list
//   const [images, setImages] = useState([]);
//   const [observer, setElements, entries] = UseIO({
//     threshold: 0.25,
//     rootMargin: "30px",
//     root: null,
//   });
//   // request state
//   const [loading, setLoading] = useState(false);
//   //ref -뷰포트, 교차할 마지막 요소

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getProducts(categoryId);
//       setImages(result.data.payload);
//     };
//   });

//   const fetchData = useCallback(async (pageNumber) => {
//     const url = `https://jsonplaceholder.typicode.com/photos?_page=&${page}_limit=10`;
//     setLoading(true);

//     try {
//       const res = await axios.get(url);
//       const { status, data } = res;

//       setLoading(false);
//       return { status, data };
//     } catch (e) {
//       setLoading(false);
//       return e;
//     }
//   }, []);

//   const handleIntersection = useCallback(
//     async (page) => {
//       const newImages = await fetchData(page);
//       const { status, data } = newImages;
//       if (status === 200) setImages([...images, ...data]);
//     },
//     [fetchData]
//   );

//   return (
//     <div className="Container">
//       <h2>Infinite Scroll😀</h2>
//       <section className="wrapperImg" ref={rootRef}>
//         {images.map((image, idx) => {
//           const lastEl = idx === photos.length - 1;
//           return (
//             <ColorImage
//               key={idx}
//               url={image.url}
//               ref={lastEl ? targetRef : null}
//             />
//           );
//         })}
//       </section>
//       {loading && <div>loading...</div>}
//     </div>
//   );
// };

// export default ScrollContainer;

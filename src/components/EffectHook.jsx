import { useState, useEffect } from "react";

// const EffectHook = () => {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([])

//   console.log("render");

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   }, [resourceType]);
//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => setResourceType("posts")}
//           className="p-2 bg-red-500 rounded-md mr-5"
//         >
//           Posts
//         </button>
//         <button
//           onClick={() => setResourceType("users")}
//           className="p-2 bg-red-500 rounded-md mr-5"
//         >
//           Users
//         </button>
//         <button
//           onClick={() => setResourceType("comments")}
//           className="p-2 bg-red-500 rounded-md"
//         >
//           Comments
//         </button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map((item) => (
//         <p key={item} className="text-[10px]">{JSON.stringify(item)}</p>
//       ))}
//     </div>
//   );
// };

// export default EffectHook;

// example 2

const EffectHook = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div>{windowWidth}</div>
    </div>
  );
};

export default EffectHook;

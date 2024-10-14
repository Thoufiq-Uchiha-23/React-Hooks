import { useEffect, useRef, useState } from "react";

// const RefHook = () => {
//   const [name, setName] = useState("");
//   const renderCount = useRef(1)

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1
//   }, [name])

//   return (
//     <>
//       <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
//       <h1>My name is {name}</h1>
//       <h1>I rendered {renderCount.current} times</h1>

//     </>
//   );
// };

// export default RefHook;

// Example 2
// useRef Hooks are used to locate HTML elements and perform operations if necessary

// const RefHook = () => {
//   const [name, setName] = useState("");
//   const inputRef = useRef();

//   function focus() {
//     inputRef.current.focus();
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         ref={inputRef}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <div>My name is {name}</div>
//       <button onClick={focus}>Focus</button>
//     </div>
//   );
// };

// export default RefHook;

// Example 3
// useRef can also be used to keep the prev state track when state renders with change 

const RefHook = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </div>
  );
};

export default RefHook;

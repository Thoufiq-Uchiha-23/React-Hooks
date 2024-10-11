import { useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");
  // const [state, setState] = useState({count: 4, theme: 'blue'})
  // const count = state.count
  // const theme = state.theme

  //   function decrementCount() {
  //     setState(prevState => {
  //         return {...prevState, count: prevState.count - 1}
  //     })
  //   }

  //   function incrementCount() {
  //     setState(prevState => {
  //         return {...prevState, count: prevState.count + 1}
  //     })
  //   }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }
  return (
    <div>
      <button className="w-7 bg-rose-900 rounded-md" onClick={decrementCount}>
        -
      </button>
      <span className="text-xl font-bold">{count}</span>
      <span className="text-xl font-bold">{theme}</span>
      <button className="w-7 bg-rose-900 rounded-md" onClick={incrementCount}>
        +
      </button>
    </div>
  );
};

export default StateHook;

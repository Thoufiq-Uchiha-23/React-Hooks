import { useReducer, useState } from "react";

// const ACTIONS = {
//     INCREMENT: 'increment',
//     DECREMENT: 'decrement'
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 };
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 };
//     default: return state
//   }
// }

// const ReducerHook = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   function increment() {
//     dispatch({ type: ACTIONS.INCREMENT });
//   }

//   function decrement() {
//     dispatch({ type: ACTIONS.DECREMENT });
//   }
//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       <span>{state.count}</span>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// };

// export default ReducerHook;

// Making Todos using useReducer hook

const ACTIONS = {};

function reducer(state, action) {}

const ReducerHook = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  return (
    <div>
      <form onSubmit={handleSubmit}>+
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ReducerHook;

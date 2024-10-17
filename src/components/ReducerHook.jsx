import { useReducer, useState } from "react";
import Todo from "./Todo";

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

// Making Todos using useReducer hook, this is with ERRORS

// export const ACTIONS = {
//   ADD_TODO: "add todo",
//   TOGGLE_TODO: "toggle todo",
//   DELETE_TODO: "delete todo",
// };

// function reducer(todos, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos, newTodo(action.payload.name)];
//     case ACTIONS.TOGGLE_TODO:
//       return todos.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, complete: !todo.complete };
//         }
//         return todo;
//       });
//     case ACTIONS.DELETE_TODO:
//       return todos.filter((todo) => todo.id !== action.payload.id);
//     default:
//       return todos; // Always return current state by default
//   }
// }

// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false };
// }
// const ReducerHook = () => {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
//     setName("");
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>
//       {todos.map((todo) => {
//         return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
//       })}
//     </div>
//   );
// };

//Refactored Code
export const ACTIONS = {
  ADD_TODO: "add todo",
  TOGGLE_TODO: "toggle todo",
  DELETE_TODO: "delete todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos; // Return the current state by default
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

const ReducerHook = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return; // Prevent adding empty todos
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a new todo"
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ReducerHook;


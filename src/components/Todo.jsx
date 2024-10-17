import PropTypes from "prop-types"
import { ACTIONS } from "./ReducerHook";

const Todo = ({todo, dispatch}) => {
  return (
    <div key={todo.id}  >
        <span style={{color: todo.complete ? "#AAA" : "#000"}}>{todo.name}</span>
        <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};


export default Todo

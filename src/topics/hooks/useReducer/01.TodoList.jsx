import { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  REMOVE_TODO: "remove-todo",
  RESET: "reset",
};

function todoReducer(state, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false }
        ]
      }
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
      }
    case ACTIONS.REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    case ACTIONS.RESET:
      return {
        todos: []
      }
    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
}

const initialState = {
  todos: [],
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: input });
      setInput("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Todo List (useReducer Intermediate Level Example)
      </h2>
      <div className="mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 p-2 w-full"
          placeholder="Add a new todo"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Todo
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.RESET })}
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        >
          Reset Todos
        </button>
      </div>
      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span>{todo.text}</span>
            <div>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })
                }
                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.REMOVE_TODO, payload: todo.id })
                }
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
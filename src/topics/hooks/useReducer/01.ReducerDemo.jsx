import React, { useReducer } from 'react';

// Actions
const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  REMOVE_TODO: 'remove-todo',
  RESET: 'reset'
};

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false }
        ]
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case ACTIONS.RESET:
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}

// Initial state
const initialState = {
  todos: []
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = React.useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: input });
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Todo List (useReducer Advanced Example)</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            <span onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.REMOVE_TODO, payload: todo.id })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
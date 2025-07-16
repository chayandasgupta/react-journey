import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  SET: 'set',
  RESET: 'reset'
};


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.SET:
      return { count: action.payload };
    case ACTIONS.RESET:
      return initialState;
    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
}

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>Decrement</button>
      <button onClick={() => dispatch({ type: ACTIONS.SET, payload: 100 })}>Set to 100</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </div>
  );
};

export default Counter;

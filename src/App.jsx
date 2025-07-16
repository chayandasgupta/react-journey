import "./App.css";
import Counter from "./topics/hooks/useReducer/02.SimpleCounter";
import TodoApp from "./topics/hooks/useReducer/01.TodoList";
function App() {
  return (
    <>
      {/* Adding ExpensiveCalculation Component */}
      <Counter />

      <hr />

      <TodoApp />
    </>
  );
}

export default App;

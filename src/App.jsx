import "./App.css";
import TodoApp from "./topics/hooks/useReducer/01.TodoList";
import Counter from "./topics/hooks/useReducer/02.SimpleCounter";
import FormStateManager from "./topics/hooks/useReducer/03.FormStateManager";

function App() {
  return (
    <>
      {/* Adding ExpensiveCalculation Component */}
      <Counter />

      <hr />

      <TodoApp />

      <hr />

      <FormStateManager />
    </>
  );
}

export default App;

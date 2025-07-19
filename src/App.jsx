import "./App.css";
import TodoApp from "./topics/hooks/useReducer/01.TodoList";
import Counter from "./topics/hooks/useReducer/02.SimpleCounter";
import FormStateManager from "./topics/hooks/useReducer/03.FormStateManager";
import RegistrationFormManage from "./topics/hooks/useReducer/04.RegistrationFromManage.jsx";

function App() {
  return (
    <>
      {/* Adding ExpensiveCalculation Component */}
      <Counter />

      <hr />
      
      <h2 className="text-2xl font-bold mb-4">useReducer Example</h2>
      <TodoApp />

      <hr />

      <FormStateManager />


      <hr />
      <RegistrationFormManage />
    </>
  );
}

export default App;
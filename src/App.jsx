import { useState } from 'react'
import './App.css'
import TodoApp from './topics/hooks/useReducer/01.ReducerDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      {/* Adding ExpensiveCalculation Component */}
      <TodoApp />

    </>
  )
}

export default App

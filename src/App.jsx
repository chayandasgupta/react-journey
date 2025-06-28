import { useState } from 'react'
import './App.css'
import ExpensiveCalculation from './topics/hooks/useCallback/01-ExpensiveCalculation'

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
      <ExpensiveCalculation />
    </>
  )
}

export default App

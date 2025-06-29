import { useState } from 'react'
import './App.css'
import CachedExpensiveCalculation from './topics/hooks/useMemo/02-CachedExpensiveCalculation'

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
      <CachedExpensiveCalculation />

    </>
  )
}

export default App

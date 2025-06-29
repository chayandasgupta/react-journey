import { useState } from 'react'
import './App.css'
import AlwaysRerenderComponent from './topics/hooks/useCallback/01-AlwaysRerenderComponent';

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
      <AlwaysRerenderComponent />

    </>
  )
}

export default App

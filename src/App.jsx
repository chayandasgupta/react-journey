import { useState } from 'react'
import './App.css'
import UseRefExample from './topics/hooks/useRef/01.UseRefDemo'

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
      <UseRefExample />

    </>
  )
}

export default App

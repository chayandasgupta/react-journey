import { useState } from 'react';

// Expensive calculation function
const calculateFactorial = (number) => {
  console.log('Calculating factorial...');
  if (number < 0) return -1;
  if (number === 0) return 1;
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

const ExpensiveCalculation = () => {
  const [number, setNumber] = useState(5);
  const [increment, setIncrement] = useState(0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expensive Calculation Demo (No Optimization)</h2>
      <div className="mb-4">
        <label className="block mb-2">Enter a number for factorial:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="border p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={() => setIncrement(prev => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment Counter: {increment}
        </button>
      </div>
      <div className="p-4 border rounded">
        <h3 className="font-bold mb-2">Factorial Result</h3>
        <p>Factorial of {number}: {calculateFactorial(number)}</p>
      </div>
      <p className="mt-4 text-gray-600">
        Open the console. The calculation will run on every render, even if you just increment the counter.
      </p>
    </div>
  );
};

export default ExpensiveCalculation;
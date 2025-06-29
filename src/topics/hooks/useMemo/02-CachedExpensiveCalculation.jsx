import { useMemo, useState } from 'react';

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

const CachedExpensiveCalculation = () => {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  // This calculation will run on every render
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expensive Calculation (No useMemo)</h2>
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
          onClick={() => setCount(c => c + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Parent Count: {count}
        </button>
      </div>
      <div className="p-4 border rounded">
        <h3 className="font-bold mb-2">Factorial Result</h3>
        <p>Factorial of {number}: {factorial}</p>
      </div>
      <p className="mt-4 text-gray-600">
        Open the console. The calculation will run on every render, even if you just increment the counter.
      </p>
    </div>
  );
};

export default CachedExpensiveCalculation;

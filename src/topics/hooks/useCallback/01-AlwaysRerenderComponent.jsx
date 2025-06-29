import { useState } from 'react';

const Child = ({ onClick }) => {
  console.log('Child rendered');
  return (
    <button onClick={onClick} className="bg-green-500 text-white px-4 py-2 rounded">
      Child Button
    </button>
  );
};

const AlwaysRerenderComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert('Child button clicked!');
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useCallback Example</h2>
      <div className="mb-4">
        <button
          onClick={() => setCount(c => c + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Parent Count: {count}
        </button>
      </div>
      <Child onClick={handleClick} />
      <p className="mt-4 text-gray-600">
        Open the console. The child will only re-render if the callback reference changes.<br/>
        Try commenting out useCallback to see the difference.
      </p>
    </div>
  );
};

export default AlwaysRerenderComponent;

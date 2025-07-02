import { useEffect, useRef, useState } from 'react';

const UseRefExample = () => {
  // 1. Accessing a DOM element (focus input)
  const inputRef = useRef(null);

  // 2. Keeping mutable value (previous state)
  const [value, setValue] = useState('');
  const prevValue = useRef('');

  // 3. Advanced: Track render count
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useRef Most Common Examples</h2>
      <div className="mb-4">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="border p-2 rounded"
          placeholder="Type something..."
        />
        <button
          onClick={handleFocus}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Focus Input
        </button>
      </div>
      <div className="mb-2">
        <strong>Current Value:</strong> {value}
      </div>
      <div className="mb-2">
        <strong>Previous Value:</strong> {prevValue.current}
      </div>
      <div className="mb-2">
        <strong>Render Count (tracked with useRef):</strong> {renderCount.current}
      </div>
      <p className="mt-4 text-gray-600">
        - Click the button to focus the input using <code>useRef</code>.<br/>
        - The previous value is tracked using <code>useRef</code> as well.<br/>
        - Render count is tracked using <code>useRef</code> (does not cause re-render).
      </p>
    </div>
  );
};

export default UseRefExample;

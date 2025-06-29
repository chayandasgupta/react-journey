# useCallback in React

## What is useCallback?

`useCallback` is a React hook that returns a memoized version of a callback function. It helps prevent unnecessary re-renders of child components that receive functions as props.

---

## Example 1: Always Re-render (No useCallback)

In this example, the child component always re-renders when the parent updates, because the callback function is re-created on every render.

```jsx
import React, { useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

const AlwaysRerenderComponent = () => {
  const [count, setCount] = useState(0);

  // New function instance every render
  const handleClick = () => {
    alert("Child button clicked!");
  };

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent Count: {count}
      </button>
      <Child onClick={handleClick} />
    </>
  );
};
```

- **Result:** Every time you click the parent button, the child re-renders (see console log), even though its props haven't changed.

---

## Example 2: Prevent Unnecessary Re-render (With useCallback)

Here, `useCallback` is used to memoize the callback, so the child only re-renders if the callback reference changes.

```jsx
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

const PreventAlwaysRerenderComponent = () => {
  const [count, setCount] = useState(0);

  // Memoized function reference
  const handleClick = useCallback(() => {
    alert("Child button clicked!");
  }, []);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent Count: {count}
      </button>
      <Child onClick={handleClick} />
    </>
  );
};
```

- **Result:** Now, clicking the parent button does NOT cause the child to re-render, because the callback reference is stable.

---

## Summary

- Use `useCallback` with `React.memo` to prevent unnecessary child re-renders when passing callbacks as props.
- Only optimize if you notice performance issues or unnecessary renders in your app.

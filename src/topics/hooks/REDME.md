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

# useMemo in React

## What is useMemo?

`useMemo` is a React hook that memoizes the result of an expensive calculation, so it only recalculates when its dependencies change. This prevents unnecessary recalculations and improves performance, especially for heavy computations.

---

## Key Difference: Without vs With useMemo

Suppose you have this expensive calculation in your component:

```jsx
const factorial = calculateFactorial(number); // Runs on every render
```

**With useMemo:**

```jsx
const factorial = useMemo(() => calculateFactorial(number), [number]); // Only recalculates when 'number' changes
```

### How it works

- **Without useMemo:** The calculation runs every time the component re-renders, even if the input (`number`) hasn't changed. This can slow down your app if the calculation is expensive.
- **With useMemo:** The calculation only runs when the dependency (`number`) changes. On other renders, React reuses the previously memoized result, saving computation time.

### When to use

- Use `useMemo` when you have an expensive calculation that does not need to run on every render, but only when certain values change.
- Avoid overusing `useMemo` for simple or fast calculations, as it adds complexity.

---

## Example Difference

```jsx
// Without useMemo (runs every render)
const factorial = calculateFactorial(number);

// With useMemo (runs only when 'number' changes)
const factorial = useMemo(() => calculateFactorial(number), [number]);
```

**Summary:**

- `useMemo` helps prevent unnecessary recalculations and improves performance for expensive operations.
- Only the use of `useMemo` and its dependency array makes the difference in performance.

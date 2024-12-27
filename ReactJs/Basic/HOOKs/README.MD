# What are hooks?
Hooks is a special JavaScript function that allows you use state and other React features without writing a class. 

Note: Hooks can be used inside an existing function component without rewriting the component.

#2 :- React Hooks are functions that enable functional components to use React state and lifecycle features. They eliminate the need for class components, making code cleaner and easier to maintain.


# Types of React Hooks
## 1. State Hooks (useState())
State Hooks like useState allows functional components to manage local state.

## 2. Context Hooks (useContext())
 useContext enable functional components to access the React Context API and share data across the component tree.

## 3. Ref Hooks (useRef())
useRef provide access to DOM nodes or persist values without causing re-renders.

## 4. Effect Hooks (useEffect())
The useEffect hook is used to perform side effects in your functional components, such as fetching data but it only runs when the component (or some of its props) changes and during the initial mount.

## 5. Performance Hooks ( useMemo(), useCallback() )
Performance Hooks like useMemo and useCallback optimize rendering by memoizing values or functions.

useMemo     : Returns a memoized value to avoid expensive calculations on every render.
useMemo #2  : useMemo is a React hook that memoizes the result of a function. It is used to optimize performance by caching the result of a function and returning the cached result when the inputs to the function have not changed.


useCallback     : Returns a memoized version of a callback function.
useCallback #2  : useCallback is a React hook that returns a memoized version of a callback function. It’s used to optimize performance by preventing unnecessary re-renders. Specifically, it helps avoid recreating functions when their dependencies haven’t changed, which can be useful when passing callbacks to child components that rely on referential equality to prevent re-rendering.


# 6. Resource Hooks (useFetch())
These include useFetch or custom hooks for fetching and managing external resources.

# 7. Other Hooks
React offers additional hooks for specific use cases

useReducer: For complex state management.
useImperativeHandle: Customizes the instance value exposed by useRef.
useLayoutEffect: Like useEffect but fires synchronously after DOM updates.
Custom Hooks
Custom Hooks are user-defined functions that encapsulate reusable logic. They enhance code reusability and readability by sharing behavior between components.





















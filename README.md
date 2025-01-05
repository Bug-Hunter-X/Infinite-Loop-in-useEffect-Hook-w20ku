# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrect usage of the `useEffect` hook.

## Bug Description

The `bug.js` file contains a component that uses the `useEffect` hook to update a state variable.  However, the dependency array is empty (`[]`), causing the effect to run repeatedly, leading to an infinite loop.

## Solution

The `bugSolution.js` file provides a corrected version of the component.  The dependency array is updated to include the `count` state variable, preventing the infinite loop. The effect will only run when `count` changes.

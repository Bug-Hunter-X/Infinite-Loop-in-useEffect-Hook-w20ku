```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The effect only runs once after the initial render
    console.log('Effect ran');
  }, []);
  useEffect(() => {
    //Correct: The effect will run whenever the count state changes
    //In this case, after every 1000ms, it logs the count.
    const interval = setInterval(()=>{
        console.log(count)
    }, 1000);
    return () => clearInterval(interval);
  },[count]);
  const incrementCount = () =>{
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```
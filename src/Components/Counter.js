import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [autoCount, setAutoCount] = useState(0);

  useEffect(() => {
    const interVal = setInterval(() => {
      setAutoCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interVal);
  }, []);

  return (
    <div>
      <header className="header">
        <div className="counter">
          <div onClick={() => setCount(count - 1)}>
            <h1>-</h1>
          </div>

          <div>
            <h1>{count}</h1>
          </div>

          <div onClick={() => setCount(count + 1)}>
            <h1>+</h1>
          </div>

          <div onClick={() => setAutoCount(autoCount + 1)}>
            <h1>{autoCount}</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Counter;

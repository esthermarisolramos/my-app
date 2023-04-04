import React, { useState, useEffect } from 'react';

  const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `CONTADOR ${count} veces`;
  });

  return (
    <div>
      <p> CONTADOR  {count} VECES</p>
      <button onClick={() => setCount(count + 1)}>
        AUMENTAR CONTADOR 
      </button>
      <button onClick={() => setCount(count - 1)}>
        DISMINUIR CONTADOR 
      </button>
    </div>
  );
  }
    export default Counter;


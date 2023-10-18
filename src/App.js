import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const push = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const pop = () => {
    if (isEmpty()) {
      return;
    }
    setItems((prevItems) => prevItems.slice(0, -1));
  };

  const peek = () => {
    if (isEmpty()) {
      return null;
    }
    return items[items.length - 1];
  };

  const isEmpty = () => {
    return items.length === 0;
  };

  return (
    <div>
      <div>
        <button onClick={() => push(prompt('Enter a value to push:'))}>Push</button>
        <button onClick={pop}>Pop</button>
        <button onClick={() => alert(`Top of Stack: ${peek()}`)}>Peek</button>
      </div>
      <div>
        <h3>Stack Contents:</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

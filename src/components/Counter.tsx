import { useState } from "react";

export default function Counter() {
    const [state, setState] = useState<number>(0);
    const increment = () => {setState(state + 1)};
    const decrement = () => {setState(state - 1)};
    
  return (
    <div>
        <p>Счетчик:{state}</p>
        {/* <button onClick={() => setState(state + 1)}>+1</button>
        <button onClick={() => setState(state - 1)}>-1</button> */}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={() => setState(0)}>0</button>
        <button onClick={() => setState(state*2)}>x2</button>
    </div>
  )
}
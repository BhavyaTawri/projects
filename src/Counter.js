import React, {useState} from 'react';
function Counter() {
    //Declare a state variable called "count" and initialise it to 0
    const [count, setCount]=useState(0);
    function handleIncrement() {
        setCount(count+1);
    }
    function handleIncrement() {
        setCount(count+1);
    }
    function handleDecrement() {
        setCount(count-1);
    }
    return(
        <div>
            <h1>Counter.{count}</h1>
            <button onClick={handleIncrement}>+</button>

            <button onClick={handleDecrement}>-</button>
            
        </div>
    );
}
export default Counter;
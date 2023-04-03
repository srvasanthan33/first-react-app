import React from "react";
import { useState } from "react";

function CounterComponent() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    const decrement = () => {
        setCounter(counter - 1);
        if (counter - 1 < 0) setCounter(0);
        console.log(counter);
    };

    return (
        <React.Fragment>
            <h1>Counter : {counter}</h1>

            <button onClick={increment}>Like</button>
            <button onClick={decrement}>Disike</button>
        </React.Fragment>
    );
}

export default CounterComponent;

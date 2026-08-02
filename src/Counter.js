import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <h2>Counter: {count}</h2>
            {count === 0 && <p className="message">Minimum limit reached</p>}
            <div className="buttons">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement} disabled={count === 0}> Decrement
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>

        </div>
    );
};

export default Counter;
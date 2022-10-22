import { useState } from "react";

import PropTypes from "prop-types";

// If the handleAdd function not use any prop, we can define it outside the component
// const handleAdd = (event, newValue) => {
//     console.log("Hi");
// }


// Functional component
export const CounterApp = ({ value }) => {

    // When the state changes, the component will be re-rendered with the new value
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter((c) => c + 2);
    };

    const handleSubtract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(value);
    };
    return (
        <>
            <h1>CounterApp</h1>
            {/* <button onClick={ (event) => handleAdd(event, "hi") }> -1 </button> */}

            <button onClick={handleSubtract}> -1 </button>
            <span> {counter} </span>
            <button onClick={handleAdd}> +1 </button>

            <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';

// import {Fragment} from 'react';
// <></> is a shorthand for <Fragment></Fragment>

const newMessage = "Hola Mundo";
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const person = {
    name: "Juan",
    age: 25,
};

// Note: react can't render a promise or async function
const generateRandomNumber = () => Math.round(Math.random() * 100);

/**
 *
 * @description this ia a function component
 */
export const FirstApp = ({ 
    title/*  = "Hello World" */,
    subtitle/*  = 12 */,
    name,
}) => {
    // if (!title) throw new Error("Title is required");

    return (
        // <Fragment>
        // Parent node is necessary
        <>
            <h1>{newMessage}</h1>
            <h2>{arrayOfNumbers}</h2>

            <h3>My random number {generateRandomNumber()}</h3>
            <h5>{title}</h5>
            <h6> {subtitle + 1} </h6>

            {/*
                React cant render objects
                <h3>{person}</h3>

                React can render objects with JSON.stringify
                <code>{JSON.stringify(person)}</code>
                <pre>{JSON.stringify(person)}</pre>
            */}

            <p>Soy un parrafo</p>
        </>
        // </Fragment>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: "No title",
    subtitle: 12,
    name: "Alejandro Dubon"
}
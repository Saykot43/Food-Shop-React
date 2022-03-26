import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <>
            <h1 className='h1'>Question & Answer</h1>
            <div className='question'>
            <div>
                <h3>How react works?</h3>
                <p>React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.</p>
            </div>
            <div>
                <h3>What are the differences between props and state?</h3>
                <p>In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component. The state can be initialized by props.</p>
            </div>
            <div>
                <h3>How useState works?</h3>
                <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            </div>
        </div>
        </>
    );
};

export default Question;
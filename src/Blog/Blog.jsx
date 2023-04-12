import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div className='blog-question mx-auto mt-20 flex-col gap-20'>
                <div>
                    When SHould use Context API?
                </div>
                <div>
                Context API in React is used for managing and sharing state across components efficiently. It is ideal for scenarios where data needs to be accessed by multiple components, global application state management, prop drilling becomes unwieldy, or when fine-grained control over component updates is needed. It provides a more centralized and optimized way to manage shared state in a React application.
                </div>
                <div>
                    What is custom HOOK in react ?
                </div>
                <div>
                A custom hook in React is a reusable function that encapsulates logic and stateful behavior for use in functional components, allowing for better code organization, separation of concerns, and code reusability in React applications.
                </div>
                <div>
                what is the purpose of useRef  ?
                </div>
                <div>
                The useRef hook in React is used to create a mutable reference to a value that persists across re-renders of a component. It allows for accessing and modifying the value directly without triggering a re-render of the component. This is useful for storing and accessing mutable data, managing focus, interacting with DOM elements, or triggering imperative actions in a React component.
                </div>
                <div>
                what is useMemo   ?
                </div>
                <div>
                The useMemo hook in React is used to memoize the result of a computation or function call, so that it is only recomputed when the dependencies provided in the dependency array change. It helps to optimize performance by preventing unnecessary re-computations in functional components. useMemo is particularly useful when dealing with expensive calculations or operations, such as complex data processing or API requests, that can be memoized to avoid redundant calculations and improve performance in React applications.
                </div>

             </div>
        </div>
    );
};

export default Blog;
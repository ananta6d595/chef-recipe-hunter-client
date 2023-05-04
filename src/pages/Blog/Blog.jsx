import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=" h-[150px] mb-32 bg-emerald-50">
                <div className="mx-auto h-[150px] sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14">
                    <h1 className="font-bold text-5xl flex justify-center py-8">
                        Blog
                    </h1>
                </div>
            </div>
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14 mb-16">
                <div className="bg-white">
                    <div>
                        {/* <!-- Q-1 --> */}
                        <div className="mb-7">
                            <span className="font-bold text-black">
                                1.Tell us the differences between uncontrolled
                                and controlled components:
                            </span>
                            <p className="text-gray-600">
                                <span className="font-bold">
                                    Controlled Component{" "}
                                </span>
                                is bound to a value, and its changes will be
                                handled in code by using **event-based
                                callbacks**. Here, the input form element is
                                handled by the react itself rather than the DOM.
                                In this, the mutable state is kept in the state
                                property and will be updated only with
                                setState() method. Controlled components have
                                functions that govern the data passing into them
                                on every **onChange** event occurs. This data is
                                then saved to state and updated with setState()
                                method. It makes component have better control
                                over the form elements and data. Unlike the
                                uncontrolled component, the input form element
                                in the controlled component is handled by the
                                component rather than the DOM. It takes its
                                current value through props. The changes are
                                notified through callbacks.
                            </p>
                            <p>
                                <span className="font-bold">
                                    Uncontrolled Component
                                </span>{" "}
                                It is similar to the traditional HTML form
                                inputs. Here, the form data is handled by the
                                DOM itself. It maintains their own state and
                                will be updated when the input value changes. To
                                write an uncontrolled component, there is no
                                need to write an event handler for every state
                                update, and you can use a ref to access the
                                value of the form from the DOM. //2 Similar to
                                the traditional HTML form inputs, the
                                uncontrolled component can be written using a
                                ref to get form values from the DOM. Thus there
                                is no need to write an event handler for every
                                state update and the HTML elements maintain
                                their own state that will be updated when the
                                input value changes.
                            </p>
                        </div>
                        {/* <!-- Q-2 --> */}
                        <div className="mb-7">
                            <span className="font-bold text-black">
                                2. How to validate React props using PropTypes?
                            </span>
                            <p className="text-gray-600">
                                Ans: PropTypes is a tool in React that allows
                                you to validate the props passed to a component
                                by specifying the expected types in a propTypes
                                object. This helps prevent bugs by ensuring that
                                the correct data types are being passed to a
                                component. Simply import PropTypes from the
                                'prop-types' package and define the expected
                                types of the props in the component's propTypes
                                object. If a prop is passed that is not of the
                                expected type, a warning will be shown in the
                                console. Below is an example that shows us how
                                to use these PropTypes for type checking in our
                                app. As we discussed already, they are defined
                                as objects with a key and a value pair where the
                                key is the name of the object while value
                                contains the classes which will be used for type
                                checking.In the above code, the name prop is
                                expected to have a value which is a string, age
                                is a number, address is an object, and friends
                                is an array.
                            </p>
                        </div>
                        {/* <!-- Q-3 --> */}
                        <div className="mb-7">
                            <span className="font-bold text-black">
                                3. Tell us the difference between nodejs and
                                express js.?
                            </span>
                            <p className="text-gray-600">
                                Ans: Node.js is a JavaScript runtime built on
                                Chrome's V8 JavaScript engine. It allows
                                developers to run JavaScript on the server side.
                                Express.js, on the other hand, is a web
                                framework for Node.js. It is designed to make
                                building web applications on top of Node.js
                                easier and more efficient. Node.js is used to
                                execute JavaScript code on the server side, it
                                allows to build fast and scalable server-side
                                applications, and provide a great platform for
                                real-time applications. Express.js is a popular
                                framework for building web applications on top
                                of Node.js, it is minimal and flexible, and
                                provides a lot of features like routing,
                                middlewares and more. So in short, Node.js is
                                the platform, and Express.js is a framework
                                built on top of it to simplify the process of
                                building web applications.
                            </p>
                        </div>
                        {/* <!-- Q-4 --> */}
                        <div className="mb-7">
                            <span className="font-bold text-black">
                                4. What is a custom hook, and why will you
                                create a custom hook??
                            </span>
                            <p className="text-gray-600">
                                Ans: React Hooks allow you to hook into the
                                state and lifecycle of a component in functional
                                components. In previous versions of React, you
                                could only have access to state and lifecycles
                                in a class component. Hooks make it possible in
                                functional components. React has built-in hooks
                                like useEffect, useState, and many more, which
                                provide a lot of use cases. However, sometimes,
                                you want a Custom Hook. A custom hook allows you
                                to create shared component logic that can be
                                used in many components. These custom hooks will
                                also use the built-in hooks but in one place.
                                They’re like functions, prefixed with “use”
                                (because they use in-built hooks and also follow
                                the Rules of Hooks), which can accept any number
                                of arguments and expose values and methods that
                                can be used by a component.<br/>The primary benefit
                                of writing and using a custom hook is that you
                                don’t have to repeat the same logic in many
                                places of your application. Repetition often
                                breaks the DRY rule and makes your application
                                more difficult to manage. Custom hooks are
                                helpful utilities that help you reuse code
                                logic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
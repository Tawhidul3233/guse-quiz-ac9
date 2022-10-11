import React from 'react';

const Blog = () => {
     return (
          <div className=' m-10'>
               <div>
                    <h1 className='text-3xl my-3'> What is the purpose of react router?</h1>
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the     React Router works. The application will contain three components:   home component, about a component, and contact component. We will  use React Router to navigate between these components.</p>
               </div>
               <div>
                    <h1 className='text-3xl my-3'> How dose context api work?</h1>
                    <p> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
               </div>
               <div>
                    <h1 className='text-3xl my-3'> UseRef React Hook?</h1>
                    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. Should we use useRef in React?
                    Image result for useRef react hook
                    In React you want to use the useRef hook or if you're in a React class component,                   you want to use createRef. The reason you don't want to use getElementById</p>
               </div>
          </div>
     );
};

export default Blog;
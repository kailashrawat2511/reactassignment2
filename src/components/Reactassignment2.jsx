import React from 'react'

function Reactassignment2() {
  return (
    <>
      Ques1:What do you understand by React state?<br /><br />

      Ans:The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.<br /><br />

      Ques2:What is the difference between state and props in React?<br /><br />

      Ans:Props are used to pass data from a parent component to a child component, while state is used to manage data within a component.<br /><br />

      Ques3:What is lazy loading in react?<br /><br />

      Ans:Lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching.<br /><br />

      Ques4:Difference b/w Stateful and stateless Component.<br /><br />

      Ans:The difference between stateful and stateless is that one has state, and the other doesn't. That means the stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing.<br /><br />

      Ques5:How do you switch one component to another, Conditional Rendering?<br /><br />

      Ans:Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like (if) or the conditional operator to create elements representing the current state, and let React update the UI to match them.<br /><br />

      Ques6:What is the package name you are using for routing<br /><br />

      Ans:React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.

      Ques7:What is UseState Hook ?(Implementation)

      Ans: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.<br /><br />

      Ques9:Explain the Render in React.<br /><br />

      Ans:Rendering is React's process of describing a user interface based on the application's current state and props. The initial render in a React app is the first render when the application starts up, while re-rendering occurs when there is a change in the state to figure out which parts of the UI need an update.<br /><br />
    </>
  )
}

export default Reactassignment2
import React, { Component } from 'react';
import WelcomeComponent from './Welcome';
import Counter from './Counter';
import Planets from './Planets';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="sidebar">
//         <span>Hello from React</span>
//       </div>
//     );
//   }
// }

// function App() {}
function sum(a, b) {
  return a + b;
}
const App = () => {
  return (
    <div className="sidebar">
      {/* <WelcomeComponent name="John" surname="Black" />
      <WelcomeComponent name="Jane" surname="White" /> */}
      {/* <Counter initial={sum(10, 2)} /> */}
      {/* <Counter initial={5} /> */}
      <Planets />
      {/* <Counter initial={-100} /> */}
    </div>
  );
}


// function App() {
//   return React.createElement(
//     'div',
//     {
//       className: 'sidebar',
//     },
//     React.createElement(
//       'span',
//       {},
//       'Hello from React',
//     )
//   )
// }

// function App() {
//   return (
//     <div className='sidebar'>
//       <span>Hello from React</span>
//     </div>
//   );
// }


export default App;

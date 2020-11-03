import { Component } from 'react';
import Todos from './pages/todos';
import './App.scss';


function UserGreeting(props) {
  return (
    <div>Welcome back!</div>
  );
}

function GuestGreeting(props) {
  return (
    <div>Please, login!</div>
  );
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting />
  // }

  // return <GuestGreeting />
  let button;
  // if (props.isLoggedIn) {
  //   button = <UserGreeting />;
  // } else {
  //   button = <GuestGreeting />
  // }
  // button = (
  //   <>
  //     <UserGreeting />
  //     <GuestGreeting />
  //   </>
  // );

  // return (
  //   <div>
  //     {button}
  //   </div>
  // );
  // return (
  //   <div>
  //     {props.isLoggedIn && <UserGreeting />}
  //   </div>
  // )
  // return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
  // return (
  //   <div>
  //     {props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
  //   </div>
  // );
  if (!props.isLoggedIn) {
    return null;
  }

  return <UserGreeting />;
};

function User(props) {
  return (
    <li>{props.title}</li>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//         {
//           id: 'a',
//           title: 'John',
//         },
//         {
//           id: 'b',
//           title: 'Jane',
//         }
//       ],
//     }
//   }
//   // handle(event) {
//   //   event.preventDefault();
//   //   // console.log(event.nativeEvent)
//   //   // console.log(event);
//   //   console.log(event.target.value);
//   // }
//   render() {
//     return(
//       <div>
//         {/* <button onClick={this.handle}>Click me!</button> */}
//         {/* <a href="https://google.com" onClick={this.handle}>google.com</a>
//         <input onChange={this.handle} /> */}
//         {/* <Greeting isLoggedIn={false} /> */}
//         {/* <ul>
//           {this.state.users.map((user, index) => (
//             <User key={`${index}_${user.title}`} title={user.title} />
//           ))}
//         </ul> */}
//       </div>
//     );
//   }
// }
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// class NameInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     // console.log(this);
//     // this.setState({
//     //   // value: event.target.value.toUpperCase().replace(/[1-9]/, ''),
//     //   value: event.target.value,
//     // });
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div>
//         {/* <input value={this.state.value} onChange={this.handleChange} /> */}
//         {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
//         {/* <select value={this.state.value} onChange={this.handleChange}>
//           <option value=''>--Select--</option>
//           <option value='a'>a</option>
//           <option value='b'>b</option>
//         </select> */}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleChange} />
//           <input
//             type="password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange} />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
export default Todos;

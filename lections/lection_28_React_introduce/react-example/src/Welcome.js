import { Component } from 'react';
// function Welcome(props) {
//   return (
//   <div>Welcome, {props.name} {props.surname}</div>
//   );
// }

class Welcome extends Component {
  render() {
    const { name, surname} = this.props;
    return (
      <div>Welcome, {name} {surname}</div>
    );
  }
}

export default Welcome;

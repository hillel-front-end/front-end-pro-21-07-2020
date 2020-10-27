import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.initial,
      str: 'some string',
    };
  }

  componentDidMount() {
    console.log('Mounted');
  }

  componentDidUpdate() {
    console.log('Updated');
  }

  render() {
    console.log('render', this.state.counter);
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={() => {
          // this.state.counter++;
          this.setState({
            counter: this.state.counter + 1,
            str: `${this.state.counter}some string`
          })
        }}>Increase</button>
        {this.state.counter > 0 ? (
          <button onClick={() => {
            this.setState({
              counter: this.state.counter - 1,
              str: `${this.state.counter}some string`
            });
          }}>Decrease</button>
        ): (
          ''
        )}
        <span>{this.state.str}</span>
      </div>
    );
  }
}

export default Counter;

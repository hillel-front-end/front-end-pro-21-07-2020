import { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }
  handleChange = event => {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate({
      id: nanoid(),
      title: this.state.title,
      status: 'NEW',
    });
    this.setState({
      title: '',
    });
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='form-container'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type="text"
            className='form-control'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default Form;

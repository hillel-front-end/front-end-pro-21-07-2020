import { Component } from 'react';
import TodoItem from '../../components/todo-item';
import Form from '../../components/form';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 'a',
          status: 'NEW',
          title: 'Finish course',
        },
        {
          id: 'b',
          status: 'DONE',
          title: 'Learn JS core',
        },
      ],
    };
  }

  handlerChangeStatus = (id, status) => {
    // console.log('called', id, status);
    // this.state.todos.forEach(todo => {
    //   if (todo.id === id) {
    //     todo.status = status;
    //   }
    // }) // ! Doesn't work
    // const updated = this.state.todos.map(todo =>
    //   todo.id === id ? {
    //     ...todo,
    //     status,
    //   } : todo
    // );
    const updated = this.state.todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      todo.status = status;

      return todo;
    });
    this.setState({
      todos: updated,
    });
  }

  handleCreate = todo => {
    this.setState({
      todos: [
        ...this.state.todos,
        todo,
      ],
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="list-group">
              {todos.map(todo => (
                // <TodoItem key={todo.id} status={todo.status} title={todo.title} />
                <TodoItem key={todo.id} {...todo} onChangeStatus={this.handlerChangeStatus} />
              ))}
            </ul>
          </div>
          <div className='col-12'>
            <Form onCreate={this.handleCreate} />
          </div>
        </div>
      </div>
    );
  };
}

export default Todos;

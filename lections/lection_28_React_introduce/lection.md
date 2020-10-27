# Lection 27 - React introduction

React - JavaScript библиотека для построения пользовательских интерфейсов.

## JSX

**JSX** - синтаксический сахар для функции

```js
React.createElement(component, props, ...children)
```

Например, данный html
```html
<div class="sidebar">...</div>
```

в чистом JS на React будет записан: 

```js
React.createElement(
  'div',
  { className: 'sidebar' },
  '...'
);
```

с помощью JSX:

```html
<div className="sidebar">...</div>
```

## Рендеринг React компонентов

Для рендеринга React компонентов в браузере используется react-dom библиотека.

```js
import ReactDom from 'react-dom';

const element = <h1>Hello from React!</h1>;
ReactDOM.render(element, document.querySelector('#root'));
```

## React компонент

### Классовые компоненты 

```js
class MyFirstComponent extends React.Component {
  render() {
    return (
      <h1>Hello from React!</h1>
    );
  }
}

ReactDOM.render(<MyFirstComponent />, document.querySelector('#root'));
```

### Функциональный компонент

```js
const MyFirstComponent = () => {
  return (
    <h1>Hello from React!</h1>
  );
}

ReactDOM.render(<MyFirstComponent />, document.querySelector('#root'));
```

### Композиция компонентов

```js
function Welcome(props) {
  return (
    <h1>Welcome {props.name}</h1>
  );
}
function App() {
  return (
    <div>
      <Welcome name={'John'}>
    </div>
  );
}
```

### State

```js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div>Count: {}</div>
        <button onClick={() => this.setState({
          count: this.state.count + 1,
        })}>Increase</button>
        <button onClick={() => this.setState({
          count: this.state.count - 1,
        })}>Decrease</button>
      </div>
    );
  }
}
```

### Lifecycle

[Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)



# React

## Обработка событий

```js
class ActionLink extends Component {
  handleClick(event) {
    event.preventDefault();
    console.log('Link clicked');
  }

  render() {
    return(
      <a href="https://google.com" onClick={this.handleClick}>google.com</a>
    );
  }
}
```

**event** в примере выше - это синтетическое событие. Все события в React являются экземплярами класса SynteticEvent. Такой подход позволяет сделать события кроссбраузерными.

Синтетические события также имеют метод preventDefault.

## Условный рендеринг

```js
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
  if (props.isLoggedIn) {
    return <UserGreeting />
  }

  return <GuestGreeting />
};
```


### Переменные-элементы

```js
function Greeting(props) {
  let button;
  if (props.isLoggedIn) {
    button = <UserGreeting />;
  } else {
    button = <GuestGreeting />;
  }
}
```

### Условия с логическим оператором &&

```js
function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn && <UserGreeting />}
      {!props.isLoggedIn && <GuestGreeting />}
    </div>
  );
}
```

### Тернарный оператор

```js
function Greeting(props) {
  return props.isLoggedIn ? (
    <UserGreeting />
  ) : (
    <GuestGreeting />
  );
}
```

### Предотвращение рендеринга компонента

```js
function Greeting(props) {
  if (!props.isLoggedIn) {
    return null;
  }

  return <UserGreeting />;
}
```

## Рендеринг списков

```js
function UsersList(props) {
  const { users } = props;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.title}
        </li>

      ))}
    </ul>
  );
} 
```

## Формы

### Управляемые компоненты

```js
class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({
      value: event.taget.value,
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}
```

### Работа с формами

```js
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted data: ', this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={this.handleChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
```


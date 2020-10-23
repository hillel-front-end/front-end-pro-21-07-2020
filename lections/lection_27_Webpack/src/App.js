import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('Test');
  return (
    <div>Hello from React. Live reload</div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

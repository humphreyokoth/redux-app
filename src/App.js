import React from 'react';

import Todos from './features/todos/todoSlice';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    Hello world
      </header>
    <Todos/>
    </div>
  );
}

export default App;

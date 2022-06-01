import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Todo from './features/todos/Todo';
import TodoId from './features/todos/TodoId';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         
           <Router>
             <Routes>
              <Route path='/' element={<Todo/>}/>
              <Route path='/:id' element ={<TodoId/>}/>
             </Routes>
           </Router>
    
      </header>
    
    </div>
  );
}

export default App;

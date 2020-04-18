import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome,
  faTrash,
  faPen
  );
function App() {
  return (
    <div className="App">
           <h1>Todo Input</h1> 
           <Todo/>
    </div>
  );
}

export default App;

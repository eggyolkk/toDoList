import React from 'react';
import { render } from "react-dom";
import './index.css';
import AddTaskBar from './App';

render(
    <div>
      <h1>to do list</h1>
      <AddTaskBar />
    </div>,
  document.getElementById('root')
);

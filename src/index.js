import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]

ReactDOM.render(
    <MyList theList={toDos}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your MyList, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


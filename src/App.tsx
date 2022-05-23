import React from 'react';
import './App.css';
//載入假資料
import robots from './mockdata/robots.json'
//導入組元件
import Robot from './components/Robot';
import styles from './App.css';
 

function App() {
  return (
    <ul>
      {robots.map((r) => (
      <Robot id={r.id} email={r.email} name={r.name}/>
      ))}
    </ul>
  );
}

export default App;

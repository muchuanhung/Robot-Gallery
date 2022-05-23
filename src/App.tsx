import React from "react";
import "./App.css";
//載入假資料
import robots from "./mockdata/robots.json";
//導入組元件
import Robot from "./components/Robot";
//作為模組加載
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

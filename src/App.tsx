import React from "react";
import "./App.css";
// 載入Logo
import logo from "./assets/images/logo.svg";
// 載入假資料
import robots from "./mockdata/robots.json";
// 導入組元件
import Robot from "./components/Robot";
// 作為全局樣式加載
import styles from "./App.module.css";

function App() {
  return (
    // @ts-ignore：无法被执行的代码的错误
    <div className={styles.app}>
      <div
        // @ts-ignore：无法被执行的代码的错误
        className={styles.appHeader}
      >
        <img
          src={logo}
          alt="logo"
          // @ts-ignore：无法被执行的代码的错误
          className={styles.appLogo}
        />
        <h1> 機器人真的是太酷了~! Go Rock It</h1>
      </div>
      <div
        // @ts-ignore：无法被执行的代码的错误
        class={styles.robotList}
      >
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

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
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
  }

  // 導入API
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  render() {
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
      <ShoppingCart />
      <div
        // @ts-ignore：无法被执行的代码的错误
        class={styles.robotList}
      >
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>;
  }
}

export default App;

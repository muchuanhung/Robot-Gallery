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
  count: number;
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {/* <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div> */}
    </div>
  );
};

export default App;

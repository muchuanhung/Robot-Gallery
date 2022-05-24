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

class App extends React.Component<Props, State> {
  // * 生命周期第一阶段： 初始化
  // 初始化组件 state
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  // 導入API
  // 在组件创建好dom元素以后、挂载进页面的时候调用
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  // * 生命周期第二阶段： 更新
  // 在组件接收到一个新的 prop (更新后)时被调用。
  // componentWillReceiveProps
  // state getDerivedStateFromProps(nextProps, prevState){}
  // shouldComponentUpdate(nextProps, nextState){
  //   return nextState.some !== this.state.some
  // }
  // 组件更新后调用
  componentDidUpdate() {}

  // * 生命周期第三阶段： 销毁
  // 组件销毁后调用，
  // 可以当作析构函数 destructor 来使用
  componentWillUnmount() {}

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
      <button
        onClick={() => {
          this.setState(
            (preState, preProps) => {
              return { count: preState.count + 1 };
            },
            () => {
              console.log("count ", this.state.count);
            }
          );
          this.setState(
            (preState, preProps) => {
              return { count: preState.count + 1 };
            },
            () => {
              console.log("count ", this.state.count);
            }
          );
        }}
      >
        Click
      </button>
      <span>count: {this.state.count}</span>
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

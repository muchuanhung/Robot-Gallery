import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";

// 用於組件間的數據傳遞 組件對外的接口
interface Props {
  
}

// 代表組件自身的狀態 組件對內的接口
interface State {
  isOpen: boolean;
}

// 繼承類組件
// 預設false隱藏
class ShoppingCart extends React.Component <Props, State>{
   super(props);
    this.state = {
      isOpen: false,
    };

    // react event 事件處理
    handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 描述事件發生的元素 
    console.log("e.target ", e.target)
    // 描述事件綁定的元素
    console.log("e.currentTarget ", e.currentTarget)
    if((e.target as HTMLElement).nodeName === "SPAN"){
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          // @ts-ignore：无法被执行的代码的错误
          // 新增click函式
          // 用setstate修改state函式
          className={`${styles2.button} ${styles2.ddd}`}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          Shoppingcart 2 (件)
        </button>
        <div
          // @ts-ignore：无法被执行的代码的错误
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}



export default ShoppingCart;
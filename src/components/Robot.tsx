import React from "react";
import styles from "./Robot.module.css";

//創建機器人資料的接口
interface RobotProps {
  id: number;
  name: string;
  email: string;
}

//FC 為函式的泛型接口導入要抓取的資料
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Robot;

import React from "react";

//創建機器人資料的接口
interface RobotProps {
id:number;
name: string;
email: string;
}


//FC 為函式的泛型接口導入要抓取的資料
const Robot : React.FC<RobotProps> = ({id, name, email}) => {
  return (
  <li>
    <img src={`https://robohash.org/${id}`} alt="robot" />
    <h2 className="">{name}</h2>
    <p className="">{email}</p>
  </li>
  );
};

export default Robot;
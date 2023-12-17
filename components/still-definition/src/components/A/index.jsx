import style from "./style.module.css";

console.log("A" + style);

function A() {
  return <div className={style.header}>A</div>;
}

export default A;

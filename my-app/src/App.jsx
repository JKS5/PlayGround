import "./App.css";
import React, { useState } from "react";
export default function App() {
  const [number, setNumber] = useState(1);
  const onIncrease = () => {
    console.log("나 호출 잘되요.");
    setNumber(number + 1);
  };
  return (
    <div className="container">
      <h1>Root:{number}</h1>
      <div id="grid">
        <Left1 number={number}></Left1>
        <Right1 onIncrease={onIncrease} number={number}></Right1>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2: {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
}
function Left3(props) {
  return (
    <div>
      <h1>Left3:{props.number}</h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1:{props.number}</h1>
      <Right2 onIncrease={props.onIncrease} number={props.number}></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2:{props.number}</h1>
      <Right3 onIncrease={props.onIncrease} number={props.number}></Right3>
    </div>
  );
}
function Right3(props) {
  return (
    <div>
      <h1>Right3:{props.number}</h1>
      <input type="button" value="+" onClick={() => props.onIncrease()}></input>
    </div>
  );
}

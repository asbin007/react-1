import React from "react";
import ReactDOM from "react-dom";
let x = "Good morning!";
let y = "Good Afternoon!";
let z = "Good Night";
const date = new Date();
const currentTime = date.getHours();
// console.log(currentTime);
let greeting;
if (currentTime < 12) {
  greeting = x;
  customStyle.color = "green";
} else if (currentTime < 18) {
  greeting = y;
  customStyle.color = "blue";
} else greeting = z;
customStyle.color = "yellow";

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);

import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const [childrenColor, setChildrenColor] = useState("#FFF");
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);                // Update Parent background
    setChildrenColor(newChildColor);         // Update both Child backgrounds
  }
  
  

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />


    </div>
  );
}

export default Parent;

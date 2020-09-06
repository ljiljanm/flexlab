import React from "react";
import SetElementsComp from "./SetElementsComp";
import SetFlexAttributes from "./SetFlexAttributes";

const Buttons = props => {
  return (
    <div>
      <div>Generate random divs: </div>
      <SetElementsComp setElements={props.setElements} />
      <SetFlexAttributes setFlexAttrHandler={props.setFlexAttrHandler} />
    </div>
  );
};

export default Buttons;

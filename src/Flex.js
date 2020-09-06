import React from "react";
import Buttons from "./components/Buttons";
import MainDiv from "./components/MainDiv";
import { useState } from "react";
const Flex = props => {
  const [elProps, setElProps] = useState({});
  const [elAttrs, setElAttrs] = useState({});
  const setElements = (no, maxDim) => {
    console.log(`Number of el is ${no}, and maxDim is ${maxDim}`);
    setElProps({ no, maxDim });
  };

  const setFlexAttrHandler = (attr, val) => {
    let newAttribs = { ...elAttrs };
    switch (attr) {
      case "justifyContent":
        newAttribs.justifyContent = val;
        break;
      case "alignItems":
        newAttribs.alignItems = val;
        break;
      case "alignContent":
        newAttribs.alignContent = val;
        break;
      case "flexDirection":
        newAttribs.flexDirection = val;
        break;
      case "flexWrap":
        newAttribs.flexWrap = val;
        break;
      case "flexGrow":
        newAttribs.flexGrow = val;
        break;

      default:
        break;
    }

    setElAttrs(newAttribs);
  };
  return (
    <div>
      <h3>FlexLab</h3>
      <Buttons
        setElements={setElements}
        setFlexAttrHandler={setFlexAttrHandler}
      />
      <MainDiv elProps={elProps} elAttrs={elAttrs} />
    </div>
  );
};

export default Flex;

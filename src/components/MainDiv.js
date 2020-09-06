import React, { useCallback, useEffect } from "react";
import RandomDiv from "./RandomDiv";
const MainDiv = ({ elProps, elAttrs }) => {
  const generateRandomDivs = () => {
    let out = [];
    for (let i = 0; i < elProps.no; i++) {
      out.push(
        <RandomDiv key={i} maxDim={elProps.maxDim} flexProps={elAttrs.flexGrow}>
          {i + 1}
        </RandomDiv>
      );
    }
    return out;
  };
  console.log("elAttrs", elAttrs);
  return (
    <div>
      <div className="MainDiv" style={elAttrs}>
        {generateRandomDivs()}
      </div>
    </div>
  );
};

export default MainDiv;

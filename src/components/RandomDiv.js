import React, { useState } from "react";
import { useEffect } from "react";

const RandomDiv = props => {
  const [customStyle, setCustomStyle] = useState({});
  const makeRandNo = arg => {
    return Math.round(Math.random() * arg);
  };
  const makeRandCol = () => {
    return `rgba(${makeRandNo(255)},${makeRandNo(255)},${makeRandNo(255)},${
      (60 + makeRandNo(40)) / 100
    } )`;
  };
  useEffect(() => {
    let width = 2 + makeRandNo(props.maxDim);
    let height = 2 + makeRandNo(props.maxDim);
    const borderColor = makeRandCol();
    const border = `${makeRandNo(
      width < height ? width * 0.4 : height * 0.4
    )}px solid ${borderColor}`;
    const smallerDim = width < height ? width : height;
    const borderRadius = `${makeRandNo(smallerDim)}px`;
    let fSz =
      smallerDim < 8
        ? 8
        : smallerDim < 20
        ? smallerDim
        : Math.floor(smallerDim * 0.7);
    const lineHeight = `${Math.floor(height * 0.9)}px`;
    const fontSize = `${fSz}px`;
    width = `${width}px`;
    height = `${height}px`;
    const margin = 4; //`${-maxDim / 4 + makeRandNo(maxDim / 3)}px`; // margins should not be greater than 1/3 of width/height
    const backgroundColor = makeRandCol();
    console.log("flex wrap", props.flexProps);
    setCustomStyle({
      width,
      height,
      margin,
      fontSize,
      border,
      lineHeight,
      borderRadius,
      backgroundColor,
      textAlign: "center",
      flexGrow: props.flexProps,
    });
  }, [props.maxDim, props.flexProps]);
  console.log("this is maxDim", props.maxDim);
  // console.log(customStyle);
  return <div style={customStyle}>{props.children}</div>;
};

export default RandomDiv;

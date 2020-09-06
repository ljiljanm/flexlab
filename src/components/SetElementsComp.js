import React, { useState } from "react";
import { useEffect } from "react";

const SetElementsComp = props => {
  const [no, setNo] = useState();
  const [maxDim, setMaxDim] = useState();
  console.log("Number of elements: ", no);
  const setNoOfEls = e => {
    const no = e.target.value;
    if (no > 0 && no < 1000) {
      setNo(no);
    } else {
      alert("No of elements must be between 1 and 99");
    }
  };
  const setMaxDims = e => {
    const maxDim = e.target.value;
    if (maxDim >= 5 && maxDim <= 100) {
      setMaxDim(maxDim);
    } else {
      alert(
        "Dimensions of elements cannot be greater than 100 and smaller than 5"
      );
    }
  };

  return (
    <div className="setElements">
      <div>
        <label>
          Set number of elements
          <br /> (between 1 and 99):
        </label>
        <input
          type="number"
          name="no"
          onChange={setNoOfEls}
          placeholder="No fo elements"
        />

        <label>
          <span> </span>
          Set maximal width and height of elements:
          <br /> (between 5px and 100px):
          <br />
          <input
            type="number"
            onBlur={setMaxDims}
            placeholder="set maximal dimension"
          />
        </label>
      </div>
      <div>
        <button onClick={() => props.setElements(no, maxDim)}>Set</button>
      </div>
    </div>
  );
};

export default SetElementsComp;

import React from "react";

const SetFlexAttributes = props => {
  return (
    <div className="parent">
      Parent container properties:
      <div>
        Justify content:
        <select
          onChange={e =>
            props.setFlexAttrHandler("justifyContent", e.target.value)
          }
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="space-around">space-around</option>
          <option value="space-between">space-between</option>
          <option value="space-evenly">space-evenly</option>
        </select>
        Align Items:
        <select
          onChange={e => props.setFlexAttrHandler("alignItems", e.target.value)}
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="baseline">baseline</option>
        </select>
        <br />
        Flex Direction:
        <select
          onChange={e =>
            props.setFlexAttrHandler("flexDirection", e.target.value)
          }
        >
          <option value="row">row</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column-reverse</option>
        </select>
        Align Content:
        <select
          onChange={e =>
            props.setFlexAttrHandler("alignContent", e.target.value)
          }
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
          <option value="baseline">baseline</option>
        </select>
        Flex Wrap:
        <select
          onChange={e => props.setFlexAttrHandler("flexWrap", e.target.value)}
        >
          <option value="nowrap">nowrap</option>
          <option value="wrap">wrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </select>
      </div>
      <div>
        Children properties:
        <br /> Flex Grow:
        <select
          onChange={e => props.setFlexAttrHandler("flexGrow", e.target.value)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
};

export default SetFlexAttributes;

import React from "react";

const SingleBox = ({ item, onCheck }) => {
  return (
    <div className={`bg-amber-200 mt-2`}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={(e) => onCheck(item.id, e.target.checked)}
        name=""
        id={item.id}
      />
      <label htmlFor={item.id}> {item.label} </label>
      <div style={{ marginLeft: "20px" }}>
        {item.children &&
          item.children?.length > 0 &&
          item.children.map((child) => (
            <SingleBox key={child.id} item={child} onCheck={onCheck} />
          ))}
      </div>
    </div>
  );
};

export default SingleBox;

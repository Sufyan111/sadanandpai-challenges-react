import React, { useState } from "react";
import { data } from "./data";
import SingleBox from "./SingleBox";

const NestedCheckBox = () => {
  const [checks, setChecks] = useState(data);

  const updateCheck = (items, id, checked) => {
    return items.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          checked,
          children: updateAllChildren(i.children, checked),
        };
      } else if (i.children.length > 0) {
        let updated = updateCheck(i.children, id, checked);

        let everyChecked = updated.every((child) => child.checked);

        return {
          ...i,
          checked: everyChecked,
          children: updated,
        };
      } else {
        return i;
      }
    });
  };

  const updateAllChildren = (children, checked) => {
    return children.map((c) => {
      return {
        ...c,
        checked,
        children: updateAllChildren(c.children, checked),
      };
    });
  };

  const handleCheck = (id, checked) => {
    setChecks((prev) => updateCheck(prev, id, checked));
  };

  return (
    <div>
      {checks.map((c) => (
        <div id={c.id}>
          <SingleBox item={c} onCheck={handleCheck} />
        </div>
      ))}
    </div>
  );
};

export default NestedCheckBox;

import React, { useState } from "react";

const MenuItem = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div className="p-1 border bg-yellow-100">{item.label}</div>
      <div className="ms-5">
        {show &&
          item.children &&
          item.children.length > 0 &&
          item.children.map((i) => <MenuItem key={i.id} item={i} />)}
      </div>
    </div>
  );
};

export default MenuItem;

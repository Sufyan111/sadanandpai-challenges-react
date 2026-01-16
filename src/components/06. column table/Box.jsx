import React from "react";

const Box = ({ value }) => {
  return (
    <div className="w-15 flex justify-center items-center m-1 h-15  border">
      {value}
    </div>
  );
};

export default Box;

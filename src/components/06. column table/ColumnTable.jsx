import React, { useState } from "react";
import Box from "./Box";

const ColumnTable = () => {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>ColumnTable</div>
      <div className="flex gap-2 items-center">
        <label htmlFor="">
          Rows:
          <input
            type="range"
            min={2}
            max={7}
            id="rows"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
          />
        </label>
        <label htmlFor="cols">
          Cols:
          <input
            type="range"
            min={2}
            max={7}
            id="cols"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
          />
        </label>
      </div>
      <div>
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div key={rowIdx} className="flex">
            {Array.from({ length: columns }).map((_, colIdx) => {
              const base = colIdx * rows;

              const number =
                colIdx % 2 === 0 ? base + rowIdx + 1 : base + (rows - rowIdx);
              return <Box key={`${rowIdx}-${colIdx}`} value={number} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnTable;

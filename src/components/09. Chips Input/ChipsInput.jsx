import React, { useState } from "react";

const ChipsInput = () => {
  const [chips, setChips] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div>
      ChipsInput
      <div>
        <input
          type="text"
          className="border w-200 rounded p-2"
          placeholder="Type and Press Enter"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value === "") return;
              let newChip = { id: crypto.randomUUID(), value: e.target.value };
              setChips((p) => [...p, newChip]);
              setInput("");
            }
          }}
        />
        <div className="flex gap-3 mt-5">
          {chips.map((chip) => (
            <span key={chip.id} className="bg-amber-200 p-2 rounded-2xl ">
              {chip.value}
              <span
                className="ms-3 cursor-pointer"
                onClick={() =>
                  setChips((p) => p.filter((c) => c.id !== chip.id))
                }
              >
                {" "}
                X
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChipsInput;

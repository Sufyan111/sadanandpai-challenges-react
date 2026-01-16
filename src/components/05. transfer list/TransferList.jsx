import React, { useState } from "react";

const TransferList = () => {
  const [list, setList] = useState({
    items: {
      1: { id: "1", label: "React", checked: true },
      2: { id: "2", label: "JavaScript", checked: false },
      3: { id: "3", label: "TypeScript", checked: false },
      4: { id: "4", label: "Redux Toolkit", checked: false },
      5: { id: "5", label: "HTML", checked: false },
      6: { id: "6", label: "CSS", checked: false },
    },

    leftIds: ["1", "2", "3", "4"],
    rightIds: ["5", "6"],
  });

  function transferAllToLeft() {
    setList((p) => {
      let u = structuredClone(p);
      u.leftIds = [...u.leftIds, ...u.rightIds];
      u.rightIds = [];
      return u;
    });
  }

  function transferAllToRight() {
    setList((p) => {
      let u = structuredClone(p);
      u.rightIds = [...u.leftIds, ...u.rightIds];
      u.leftIds = [];
      return u;
    });
  }

  function handleUpdate(st, id, checked) {
    let updated = Object.fromEntries(
      Object.entries(st.items).map(([_, i]) => {
        if (i.id === id) {
          return [_, { ...i, checked }];
        }
        return [_, i];
      })
    );
    return { ...st, items: updated };
  }

  function updateCheck(id, checked) {
    setList((p) => handleUpdate(p, id, checked));
  }

  function transferCheckedLeft() {
    setList((p) => {
      let u = structuredClone(p);
      let rightChecked = u.rightIds.filter((r) => u.items[r].checked);
      u.leftIds = [...u.leftIds, ...rightChecked];
      u.rightIds = u.rightIds.filter((r) => !rightChecked.includes(r));
      return u;
    });
  }

  function transferCheckedRight() {
    setList((p) => {
      let u = structuredClone(p);
      let leftChecked = u.leftIds.filter((l) => u.items[l].checked);
      u.rightIds = [...u.rightIds, ...leftChecked];
      u.leftIds = u.leftIds.filter((l) => !leftChecked.includes(l));
      return u;
    });
  }

  return (
    <div>
      {
        <div className="flex gap-10">
          <ul className="border rounded p-4">
            {list.leftIds.map((l) => {
              const item = list.items[l];
              return (
                <li>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => updateCheck(l, e.target.checked)}
                  />
                  <label htmlFor=""> {item.label}</label>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-1 justify-between">
            <button
              onClick={transferAllToRight}
              className="border p-1 cursor-pointer"
            >
              {">>"}
            </button>
            <button
              className="border p-1 cursor-pointer"
              onClick={transferCheckedRight}
            >
              {">"}
            </button>
            <button
              className="border p-1 cursor-pointer"
              onClick={transferCheckedLeft}
            >
              {"<"}
            </button>
            <button
              onClick={transferAllToLeft}
              className="border p-1 cursor-pointer"
            >
              {"<<"}
            </button>
          </div>
          <ul className="border rounded p-4">
            {list.rightIds.map((r) => {
              const item = list.items[r];
              return (
                <li>
                  {" "}
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => updateCheck(r, e.target.checked)}
                  />
                  <label htmlFor=""> {item.label}</label>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </div>
  );
};

export default TransferList;

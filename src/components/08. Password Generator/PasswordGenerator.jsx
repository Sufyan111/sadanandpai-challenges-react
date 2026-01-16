import React, { useState } from "react";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const SYM = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

const PasswordGenerator = () => {
  const [options, setOptions] = useState({
    length: 12,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const [password, setPassword] = useState("");

  function generatePassword({
    length,
    uppercase,
    lowercase,
    numbers,
    symbols,
  }) {
    let generator = "";
    if (uppercase) generator += UPPER;
    if (lowercase) generator += LOWER;
    if (numbers) generator += NUM;
    if (symbols) generator += SYM;

    let pass = "";
    if (generator === "") return;
    for (let index = 0; index < length; index++) {
      let i = Math.floor(Math.random() * generator.length);
      pass += generator[i];
    }

    return pass;
  }

  function handleClick() {
    let pass = generatePassword(options);
    setPassword(pass);
  }

  return (
    <div>
      PasswordGenerator
      <div className="flex flex-col gap-2">
        <label htmlFor="">
          Password length :
          <input
            type="number"
            value={options.length}
            onChange={(e) =>
              setOptions((p) => ({ ...p, length: e.target.value }))
            }
            min={6}
            max={30}
          />
        </label>
        <label htmlFor="">
          Include lowercase :
          <input
            type="checkbox"
            checked={options.lowercase}
            onChange={() =>
              setOptions((p) => ({ ...p, lowercase: !options.lowercase }))
            }
          />
        </label>
        <label htmlFor="">
          Include uppercase :
          <input
            type="checkbox"
            checked={options.uppercase}
            onChange={() =>
              setOptions((p) => ({ ...p, uppercase: !options.uppercase }))
            }
          />
        </label>
        <label htmlFor="">
          Include numbers :
          <input
            type="checkbox"
            checked={options.numbers}
            onChange={() =>
              setOptions((p) => ({ ...p, numbers: !options.numbers }))
            }
          />
        </label>
        <label htmlFor="">
          Include symbols :
          <input
            type="checkbox"
            checked={options.symbols}
            onChange={() =>
              setOptions((p) => ({ ...p, symbols: !options.symbols }))
            }
          />
        </label>
        <button onClick={handleClick} className="p-1 border cursor-pointer">
          GENERATE PASSWORD
        </button>
        <span className="bg-amber-100 text-2xl font-bold">{password}</span>
      </div>
    </div>
  );
};

export default PasswordGenerator;

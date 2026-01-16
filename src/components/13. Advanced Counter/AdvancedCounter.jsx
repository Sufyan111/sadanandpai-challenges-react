import React, { useState } from "react";

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [step, setStep] = useState(1);
  const [lower, setLower] = useState(1);
  const [upper, setUpper] = useState(1000);

  const [asyncInc, setAsyncInc] = useState(false);
  const [asyncDec, setAsyncDec] = useState(false);

  function handleInc() {
    if (count + step > upper) {
      setCount(upper);
      return;
    }
    setCount(count + step);
  }

  function handleDec() {
    if (count - step < lower) {
      setCount(lower);
      return;
    }
    setCount(count - step);
  }

  function handleAsyncInc() {
    if (asyncInc) return;
    if (count + step > upper) return;

    setAsyncInc(true);

    setTimeout(() => {
      setCount((p) => {
        if (p + step > upper) {
          return upper;
        }
        return p + step;
      });
      setAsyncInc(false);
    }, delay);
  }

  function handleAsyncDec() {
    if (asyncDec) return;
    if (count - step < lower) return;

    setAsyncDec(true);

    setTimeout(() => {
      setCount((p) => {
        if (p - step < lower) {
          return lower;
        }
        return p - step;
      });
      setAsyncDec(false);
    }, delay);
  }

  return (
    <div>
      AdvancedCounter
      <div>{count}</div>
      <div className="flex gap-2">
        <button className="border px-3 py-1" onClick={handleDec}>
          -
        </button>
        <button className="border px-3 py-1" onClick={handleInc}>
          +
        </button>
      </div>
      <div className="flex gap-2">
        <button
          className="border px-3 py-1"
          onClick={handleAsyncDec}
          disabled={asyncDec}
        >
          async-
        </button>

        <button
          className="border px-3 py-1"
          onClick={handleAsyncInc}
          disabled={asyncInc}
        >
          async+
        </button>
      </div>
      <div>
        Delay:{" "}
        <input
          type="range"
          min={1000}
          max={3000}
          step={1000}
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          className="w-full"
        />
        {delay / 1000} s
      </div>
      <div>
        Increment decrement by:
        <input
          type="number"
          className="border p-1"
          value={step}
          min={1}
          onChange={(e) => setStep(Math.max(1, Number(e.target.value)))}
        />
      </div>
      <div>
        Lower Limit
        <input
          type="number"
          className="border p-1 ml-2"
          value={lower}
          onChange={(e) => setLower(Number(e.target.value))}
        />
      </div>
      <div>
        Upper Limit
        <input
          type="number"
          className="border p-1 ml-2"
          value={upper}
          onChange={(e) => setUpper(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default AdvancedCounter;

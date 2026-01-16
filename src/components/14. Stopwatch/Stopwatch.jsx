import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);

    setTimer(id);

    return () => clearInterval(id);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
    if (timer) clearInterval(timer);
  }

  function reset() {
    setIsRunning(false);
    if (timer) clearInterval(timer);
    setTime(0);
  }

  const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

  return (
    <div>
      <h2>Stopwatch</h2>

      <h1>
        {minutes}:{seconds}:{ms}
      </h1>

      <button onClick={start} disabled={isRunning}>
        Start
      </button>

      <button onClick={pause} disabled={!isRunning}>
        Pause
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;

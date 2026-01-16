import React, { useEffect, useState } from "react";

const ProgeesBar = () => {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return p + 1;
      });
    }, 50);

    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (progress === 100) setRunning(false);
  }, [progress]);

  function start() {
    setRunning(true);
  }

  function reset() {
    setRunning(false);
    setProgress(0);
  }

  function stop() {
    setRunning(false);
  }

  return (
    <div>
      <h2>Progress Bar Auto</h2>

      <div className="w-75 h-5 border">
        <div
          className="h-full bg-blue-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 ">{progress}%</p>

      <div className="flex gap-3 mt-3">
        <button
          onClick={start}
          disabled={running || progress === 100}
          className="border px-4 py-1"
        >
          Start
        </button>

        <button onClick={reset} className="border px-4 py-1 rounded">
          Reset
        </button>
        <button
          onClick={stop}
          disabled={!running || progress === 100 || progress === 0}
          className="border px-4 py-1"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default ProgeesBar;

import React, { useState } from "react";

const InvestmentCalculator = () => {
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlySavings, setYearlySavings] = useState(1200);
  const [interest, setInterest] = useState(7);
  const [duration, setDuration] = useState(10);

  const [results, setResults] = useState([]);

  function handleReset() {
    setCurrentSavings(10000);
    setYearlySavings(1200);
    setInterest(7);
    setDuration(10);
  }

  function handleCalculate() {
    let savings = currentSavings;
    const yearlyRate = interest / 100;

    const data = [];

    for (let year = 1; year <= duration; year++) {
      const interestEarned = savings * yearlyRate;
      savings = savings + interestEarned + yearlySavings;
      const investedCapital = currentSavings + yearlySavings * year;
      const totalInterest = savings - investedCapital;

      data.push({
        year,
        savingsEndOfYear: savings,
        interestEarned,
        yearlyContribution: yearlySavings,
        investedCapital,
        totalInterest,
      });
    }

    setResults(data);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Investment Calculator</h1>
      <div className="border p-4">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Current Savings ($)
              <input
                type="number"
                className="border p-1"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(+e.target.value)}
              />
            </label>
            <label htmlFor="">
              Yearly Savings ($)
              <input
                type="number"
                className="border p-1"
                value={yearlySavings}
                onChange={(e) => setCurrentSavings(+e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Expected Interest (%, per year)
              <input
                type="number"
                className="border p-1"
                value={interest}
                onChange={(e) => setCurrentSavings(+e.target.value)}
              />
            </label>
            <label htmlFor="">
              Investment Duration (years)
              <input
                type="number"
                className="border p-1"
                value={duration}
                onChange={(e) => setCurrentSavings(+e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <button className="border p-1" onClick={handleReset}>
            Reset
          </button>
          <button className="border p-1" onClick={handleCalculate}>
            Calculate
          </button>
        </div>
      </div>
      {results.length > 0 && (
        <table className="w-full mt-6 border">
          <thead>
            <tr className="border">
              <th className="border p-2">Year</th>
              <th className="border p-2">Savings End</th>
              <th className="border p-2">Interest Earned</th>
              <th className="border p-2">Yearly Contribution</th>
              <th className="border p-2">Invested Capital</th>
              <th className="border p-2">Total Interest</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.year}>
                <td className="border p-2">{r.year}</td>
                <td className="border p-2">{r.savingsEndOfYear.toFixed(2)}</td>
                <td className="border p-2">{r.interestEarned.toFixed(2)}</td>
                <td className="border p-2">
                  {r.yearlyContribution.toFixed(2)}
                </td>
                <td className="border p-2">{r.investedCapital.toFixed(2)}</td>
                <td className="border p-2">{r.totalInterest.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentCalculator;

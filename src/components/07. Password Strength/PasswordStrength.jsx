import React, { useMemo, useState } from "react";

const PasswordStrength = () => {
  const [pass, setPass] = useState("");

  const { score, label, filters } = useMemo(() => {
    let score = 0;

    const lowercase = /[a-z]/.test(pass);
    const uppercase = /[A-Z]/.test(pass);
    const numbers = /\d/.test(pass);
    const symbols = /[^A-Za-z0-9]/.test(pass);

    if (pass.length >= 8) score++;
    if (pass.length >= 12) score++;
    if (lowercase) score++;
    if (uppercase) score++;
    if (numbers) score++;
    if (symbols) score++;

    let label = "Weak";
    if (score <= 2) label = "Weak";
    else if (score <= 4) label = "Medium";
    else label = "Strong";

    return {
      score,
      label,
      filters: { lowercase, uppercase, numbers, symbols },
    };
  }, [pass]);
  return (
    <div className="">
      <div>PasswordStrength</div>
      <input
        type="text"
        className="border p-2"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <div className="">
        Strength: <b>{label}</b> ({score}/6)
      </div>
      {filters.lowercase && "lowercase "}
      {filters.uppercase && "uppercase "}
      {filters.numbers && "numbers "}
      {filters.symbols && "symbols "}
      <div>
        <progress value={(score / 6) * 100} max={100} />
      </div>
    </div>
  );
};

export default PasswordStrength;

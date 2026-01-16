import React, { useState } from "react";

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHex(r, g, b) {
  const toHex = (n) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function mixHex(c1, c2) {
  const a = hexToRgb(c1);
  const b = hexToRgb(c2);

  const r = Math.round((a.r + b.r) / 2);
  const g = Math.round((a.g + b.g) / 2);
  const bl = Math.round((a.b + b.b) / 2);

  return rgbToHex(r, g, bl);
}

const ColorMixer = () => {
  const [color1, setColor1] = useState("#ff5733");
  const [color2, setColor2] = useState("#3366ff");

  const mixedColor = mixHex(color1, color2);
  return (
    <div className="text-center text-3xl font-bold">
      ColorMixer
      <div
        className="w-200 h-75 border-2 rounded-3xl"
        style={{ backgroundColor: mixedColor }}
      ></div>
      <div className="mt-6 flex gap-6 justify-center">
        <label htmlFor="color1">
          Color1 :
          <input
            type="color"
            id="color1"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
          />
        </label>
        <label htmlFor="color1">
          Color2 :
          <input
            type="color"
            id="color2"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ColorMixer;

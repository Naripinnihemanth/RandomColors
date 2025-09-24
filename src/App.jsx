import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [Color, setColor] = useState("rgb(101, 110, 97)");
  const [navi, setNavi] = useState(true);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(Color);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset message after 2s
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  function HandleColor() {
    const Red = Math.floor(Math.random() * 256);
    const Green = Math.floor(Math.random() * 256);
    const Blue = Math.floor(Math.random() * 256);
    setColor(`rgb(${Red}, ${Green}, ${Blue})`);
  }

  function genRandom(num) {
    const val = Math.floor(Math.random() * num);
    return val;
  }

  function HandleHEXColor() {
    const word = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    // const HEX = genRandom(word.length);
    var HEX = "#";
    for (var i = 1; i <= 6; i++) {
      HEX += word[genRandom(word.length)];
    }
    setColor(HEX);
  }

  useEffect(() => {
    console.log(Color);
  }, [Color]);

  return (
    <div className="wraper container" style={{ background: Color }}>
      <h1>
        {Color}
        <span onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</span>
      </h1>
      <button onClick={navi ? HandleColor : HandleHEXColor}>
        Change Color
      </button>
      <button
        onClick={() => {
          setNavi(!navi);
        }}
      >
        {navi ? "RGB" : "HEX"}
      </button>
    </div>
  );
}

export default App;

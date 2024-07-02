import React, { useState } from "react";

const Xdictionary = () => {
  const [input, setInput] = useState("");
  const [w, setW] = useState("");
  const [flag, setFlag] = useState(false);
  let obj1 = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handlesubmit = (e) => {
    e.preventDefault();
    for (let i of obj1) {
      if (i.word.toLowerCase() === input.toLowerCase()) {
        setW(i.meaning);
        break;
      }
    }
    if (w.length === 0) {
      setW("Word not found in the dictionary.");
    }
    setFlag(true);
  };
  const handlechange = (e) => {
    setInput(e.target.value);
    setFlag(false);
  };
  console.log(input);
  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="search a word..."
          value={input}
          required
          onChange={handlechange}
        />
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      {flag ? w : ""}
      {/* {flag && input.length > 0 ? "" : <p>Word not found</p>} */}
    </div>
  );
};

export default Xdictionary;

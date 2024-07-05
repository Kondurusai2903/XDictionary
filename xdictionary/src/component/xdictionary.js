import React, { useState } from "react";

const Xdictionary = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState("");
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
    for (let i in obj1) {
      if (obj1[i].word.toLowerCase() === input.toLowerCase()) {
        setResult(obj1[i].meaning);
        return;
      }
    }
    if (result === "") {
      setFlag("empty");
    }
  };
  const handlechange = (e) => {
    setInput(e.target.value);
    setFlag("");
    setResult("");
  };
  console.log(input);
  console.log(input);
  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="search a word..."
          value={input}
          // required
          onChange={handlechange}
        />
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      <div>
        {flag === "empty" ? "Word not found in the dictionary." : result}
      </div>

      {/* {flag && input.length > 0 ? "" : <p>Word not found</p>} */}
    </div>
  );
};

export default Xdictionary;

import React, { useState } from "react";

export function Box(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = () => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  return (
    <div className="container">
      <p id="heading">{props.heading}</p>
      <div className="box">
        <textarea
          value={text}
          onChange={handleTextChange}
          name="content"
          id="text"
          cols="65"
          rows="10"
        ></textarea>
      </div>
      <div className="count">
      <p id="count">Word Count: {getWordCount()}</p>
      </div>
    </div>
  );
}

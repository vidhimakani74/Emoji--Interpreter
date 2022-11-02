import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Smiling",
  "😁": "Grin",
  "😆": "Laughing",
  "😅": "Sweat smile",
  "😉": "Wink",
  "🤣": "Rolling on the floor laughing",
  "🥰": "Love",
  "😊": "Blush",
  "😢": "Crying",
  "😇": "Innocent",
  "😲": "Suprised",
  "😑": "Annoyed",
  "😋": "Yum",
  "🥱": "Sleepy",
  "😂": "Joy",
  "😏": "Smirking",
  "🤔": "Thinking face"
};

const list = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function listItemClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h2>Select your emoji!</h2>
      <input placeholder="put your emoji here" onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>Emojis We Know</h3>

      {list.map((item) => {
        return (
          <span
            className="emoji"
            key={item}
            onClick={() => listItemClickHandler(item)}
            style={{ padding: "5px", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

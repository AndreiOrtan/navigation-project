import React, { useState } from "react";
import Accordion from "./components/Accordion";

import Dropdown from "./components/Dropdown";

import SearchBar from "./components/SearchBar";

const questions = [
  {
    question: "What is React?",
    answer: "React is a frontend JavaScript framework.",
  },
  {
    question: "What is the best car?",
    answer:
      "BMW it's the best car because it's a perfect combination between sport and confort.",
  },
  {
    question: "Gym?",
    answer: "Yes, I gym.",
  },
];

const options = [
  {
    description: "This is the color red.",
    value: "red",
  },
  {
    description: "This is the color green.",
    value: "green",
  },
  {
    description: "This is the color blue.",
    value: "blue",
  },
];

const App = () => {
  //   const [color, setColor] = useState(options[0]);

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default App;

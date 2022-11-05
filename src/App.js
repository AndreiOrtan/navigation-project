import React, { useState } from "react";
import Accordion from "./components/Accordion";
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

const App = () => {
  return (
    <div>
      <Accordion questions={questions} />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Accordion from "./components/Accordion";
<<<<<<< HEAD
=======
import Dropdown from "./components/Dropdown";
>>>>>>> 2def67c8e5ac59a4d119977da55c432e85febafc
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

<<<<<<< HEAD
=======
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

>>>>>>> 2def67c8e5ac59a4d119977da55c432e85febafc
const App = () => {
  //   const [color, setColor] = useState(options[0]);

  return (
    <div>
<<<<<<< HEAD
      <Accordion questions={questions} />
=======
      <Dropdown options={options} />
>>>>>>> 2def67c8e5ac59a4d119977da55c432e85febafc
    </div>
  );
};

export default App;

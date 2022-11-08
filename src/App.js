import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
  const [kind, setKind] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion questions={questions} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          kind={kind}
          setKind={setKind}
          text="Select a color"
        />
      </Route>
      <Route path="/searchlist">
        <SearchBar />
      </Route>
    </div>
  );
};

export default App;

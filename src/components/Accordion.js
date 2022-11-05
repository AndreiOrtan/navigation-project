import React, { useState } from "react";

const Accordion = ({ questions }) => {
  const [index, setIndex] = useState(null);

  //   const selectQuestion = (qIndex) => {
  //     setIndex(qIndex);
  //   };
  const renderedContent = questions.map((question, idx) => {
    const status = index === idx ? "active" : "";
    return (
      <div
        key={question.question}
        className="ui styled accordion"
        onClick={() => setIndex(idx)}
      >
        <div className={`title ${status}`}>
          <i className="dropdown icon"></i>
          {question.question}
        </div>
        <div className={`content ${status}`}>
          <p>{question.answer}</p>
        </div>
      </div>
    );
  });
  return <div>{renderedContent}</div>;
};

export default Accordion;

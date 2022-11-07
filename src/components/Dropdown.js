import React, { useEffect, useState } from "react";

const Dropdown = ({ options, text, kind, setKind }) => {
  //   console.log(color);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target !== document.body) {
        return;
      }
      console.log("works");
      setOpen(false);
      console.log(e.target);
    });
  }, []);
  const renderedColors = options.map((option) => {
    if (option.description === kind.description) {
      return null;
    }
    return (
      <div
        className="item"
        key={option.description}
        onClick={() => {
          setKind(option);
        }}
      >
        {option.description}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{text}</label>
        <div
          className={`ui selection visible dropdown`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{kind.description}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedColors}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

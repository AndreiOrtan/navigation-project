import React, { useEffect, useState } from "react";

const Dropdown = ({ options }) => {
  //   console.log(color);
  const [color, setColor] = useState(options[0]);
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
    if (option.description === color.description) {
      return null;
    }
    return (
      <div
        className="item"
        key={option.description}
        onClick={() => {
          setColor(option);
        }}
      >
        {option.description}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection visible dropdown`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{color.description}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedColors}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

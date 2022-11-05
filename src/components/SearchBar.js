import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [text, setText] = useState("bmw");
  const [debouncedText, setDebouncedText] = useState(text);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          list: "search",
          origin: "*",
          srsearch: debouncedText,
        },
      });
      setItems(data.query.search);
      console.log(data);
    };
    search();
  }, [debouncedText]);

  const renderedItems = items.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            className="ui button"
          >
            Visit
          </a>
        </div>
        <div className="content">
          <h2>{item.title}</h2>
          <p>
            <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search term</label>
          <input
            autoFocus
            value={text}
            className="input"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedItems}</div>
    </div>
  );
};

export default SearchBar;

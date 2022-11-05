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
      <div key={item.pageid}>
        <h2>{item.title}</h2>
        <p>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <form>
        <label>Search for a topic</label>
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </form>

      <div className="rendered">{renderedItems}</div>
    </div>
  );
};

export default SearchBar;

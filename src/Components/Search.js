import { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  //This not The REACT way it's better to use useRef Hook
  /*   useEffect(() => {
    const el = document.querySelector(".search");
    console.log(el);
    el.focus();
  }, []); */

  const inputEl = useRef(null);

  useEffect(() => {
    const callBack = (e) => {
      if (document.activeElement === inputEl.current) return;
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };
    document.addEventListener("keydown", callBack);
    return () => document.addEventListener("keydown", callBack);
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;

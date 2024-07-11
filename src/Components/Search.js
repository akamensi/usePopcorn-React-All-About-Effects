import { useRef } from "react";
import { useKey } from "../customHooks/useKey";

const Search = ({ query, setQuery }) => {
  //This not The REACT way it's better to use useRef Hook
  /*   useEffect(() => {
    const el = document.querySelector(".search");
    console.log(el);
    el.focus();
  }, []); */

  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

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

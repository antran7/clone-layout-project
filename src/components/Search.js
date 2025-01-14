import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import { Button } from "@material-ui/core";

function Search() {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();

    console.log("Search:", input);
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <KeyboardIcon />
        <MicIcon />
        <FilterCenterFocusIcon />
      </div>

      <div className="search-button">
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm feeling lucky</Button>
      </div>
    </form>
  );
}

export default Search;

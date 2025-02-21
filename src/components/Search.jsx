import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import { Button } from "@mui/material";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function Search() {
  const [input, setInput] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);

  const search = (e) => {
    e.preventDefault();
    console.log("Search:", input);
  };

  const handleKeyboardInput = (value) => {
    setInput(value);
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <KeyboardIcon
          onClick={() => setShowKeyboard(!showKeyboard)}
          style={{ cursor: "pointer" }}
        />
        <div className="search-icon-wrapper" data-tooltip="Search by voice">
          <MicIcon className="google-blue-icon" />
        </div>
        <div className="search-icon-wrapper" data-tooltip="Search by image">
          <FilterCenterFocusIcon className="google-blue-icon" />
        </div>
      </div>

      {showKeyboard && (
        <div className="virtual-keyboard">
          <Keyboard onChange={handleKeyboardInput} inputName={"searchInput"} />
        </div>
      )}

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

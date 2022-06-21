import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
  SearchBoxWrapper,
  StyledInputBase,
  SearchIconWrapper,
} from "./SearchBox.styles.js";

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchField, SetSearchField] = useState("");

  const onSearchFieldChange = (e) => {
    SetSearchField(e.target.value);
  };

  const onSearchFieldSubmit = (e) => {
    e.preventDefault();

    SetSearchField("");
    navigate(`/search/${searchField}`);
  };

  return (
    <SearchBoxWrapper>
      <SearchIconWrapper>
        <IconButton onClick={onSearchFieldSubmit} sx={{ zIndex: 10 }}>
          <SearchIcon />
        </IconButton>
      </SearchIconWrapper>

      <form onSubmit={onSearchFieldSubmit}>
        <StyledInputBase
          placeholder="Search…"
          onChange={onSearchFieldChange}
          value={searchField}
          inputProps={{ "aria-label": "search", maxLength: 50 }}
        />
      </form>
    </SearchBoxWrapper>
  );
};

export default memo(SearchBox);

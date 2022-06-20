import SearchIcon from "@mui/icons-material/Search";

import {
  SearchBoxWrapper,
  StyledInputBase,
  SearchIconWrapper,
} from "./SearchBox.styles.js";

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchBoxWrapper>
  );
};

export default SearchBox;

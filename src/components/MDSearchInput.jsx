import { FormControl, InputAdornment, TextField } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

function MDSearchInput() {
  return (
    <FormControl sx={{m:1,display: { xs: "none", md: "inline-flex" } }}>
      <TextField
        size='small'   
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        placeholder="Search"
      />
    </FormControl>
  );
}

export default MDSearchInput;

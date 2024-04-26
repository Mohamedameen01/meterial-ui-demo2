import { FormControl, InputAdornment, TextField } from '@mui/material'

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

function XSSearchInput({close}) {
  return (
    <FormControl sx={{m:3,display:{xs:'flex',md:'none'}}} >
      <TextField
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment sx={{cursor:'pointer'}} onClick={close}>
              <CloseIcon
                color="error"
                sx={{ p: "5px", bgcolor: "#fbe9e7", borderRadius: 2 }}
              />
            </InputAdornment>
          ),
        }}
        placeholder="Search"
      />
    </FormControl>
  )
}

export default XSSearchInput
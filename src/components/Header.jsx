import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import XSSearchInput from "./XSSearchInput";
import MDSearchInput from "./MDSearchInput";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Header({open}) {
  const [menuRight, setMenuRight] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);

  const handleRightClose = () => setMenuRight(!menuRight);
  const handleRightClick = () => setMenuRight(!menuRight);
  const handleSearchClick = () => setSearchBtn(true);
  const handleSearchClose = () => setSearchBtn(false);

  return (
    <AppBar position="fixed"  sx={{bgcolor: "#ffffff" }}>
      {searchBtn ? (
        <XSSearchInput close={handleSearchClose} />
      ) : (
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              sx={{
                mr: 5,
                color: "#424242",
                display: { xs: "none", md: "inline-flex" },
                "&:hover": { bgcolor: "white" },
              }}
            >
              <AcUnitIcon sx={{ color: "#1e1e1ecc" }} />
              <Typography sx={{ mx: 1, color: "black" }} variant="h6" fontWeight='bold'>
                Berry
              </Typography>
            </IconButton>

            <IconButton
              size="small"
              sx={{
                m: 1,
                bgcolor: "#ede7f6",
                color: "#b39ddb",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#673ab7",
                  color: "#fffffff5",
                },
              }}
              onClick={open}
            >
              <MenuIcon />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                m: 1,
                bgcolor: "#ede7f6",
                color: "#b39ddb",
                borderRadius: 2,
                display: { xs: "inline-flex", md: "none" },
                "&:hover": {
                  bgcolor: "#673ab7",
                  color: "#fffffff5",
                },
              }}
              onClick={handleSearchClick}
            >
              <SearchIcon />
            </IconButton>

            <MDSearchInput />
          </Box>

          <Box
            sx={{
              bgcolor: "#e3f2fd",
              borderRadius: 6,
              "&:hover": {
                bgcolor: "#2196f3",
              },
            }}
            aria-controls={menuRight ? "demo-positioned-button" : undefined}
            aria-haspopup="true"
            aria-expanded={menuRight ? "true" : undefined}
            onClick={handleRightClick}
          >
            <IconButton>
              <Avatar sx={{ bgcolor: "#ffc107", width: 28, height: 28 }}>
                H
              </Avatar>
            </IconButton>

            <IconButton
              size="small"
              sx={{ color: "#90caf9", "&:hover": { color: "#ffffff" } }}
            >
              <SettingsTwoToneIcon />
            </IconButton>
          </Box>

          <Menu
            open={menuRight}
            onClose={handleRightClose}
            aria-labelledby="demo-positioned-button"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleRightClose}>
              <ListItemIcon>
                <PersonRoundedIcon />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            
            <MenuItem onClick={handleRightClose}>
              <ListItemIcon>
                <LogoutRoundedIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      )}
    </AppBar>
  );
}

export default Header;

import React from "react";
import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

function Header() {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#ffffff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
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
                "&:hover": {
                  bgcolor: "#673ab7",
                  color: "#fffffff5",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              bgcolor: "#e3f2fd",
              borderRadius: 6,
              "&:hover": {
                bgcolor: "#2196f3",
              },
            }}
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
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;

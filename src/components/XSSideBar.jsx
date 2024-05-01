import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Inbox } from "@mui/icons-material";
import { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function XSSideBar({ open }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const style = {
    position: "absolute",
    top: "10px",
    left: "0",
    bgcolor: "background.paper",
    width: 200,
    hight: "100%",
    mx: 3,
    borderRight: "2px solid whitesmoke",
  };

  const handleSelectedList = (index) => setSelectedIndex(index);
  return (
    <Box sx={style}>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <IconButton
          sx={{
            color: "#424242",
            "&:hover": { bgcolor: "white" },
          }}
        >
          <AcUnitIcon sx={{ color: "#1e1e1ecc" }} />
          <Typography
            sx={{ mx: 1, color: "black" }}
            variant="h6"
            fontWeight="bold"
          >
            Berry
          </Typography>
        </IconButton>
        <IconButton sx={{color:'#2196f3'}}  onClick={open}><KeyboardBackspaceIcon fontSize="small" /></IconButton>
      </Box>
      <List sx={{ mt: 3 }}>
        <Typography variant="body2">Dashboard</Typography>

        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => handleSelectedList(0)}
          sx={{
            my: 1,
            width: "90%",
            color: "#424242",
            borderRadius: "10px",
            bgcolor: "white",
            "&:hover": { color: "#5e35b1", bgcolor: "#ede7f6" },
            "&.Mui-selected": { color: "#5e35b1", bgcolor: "#ede7f6" },
          }}
        >
          <ListItemIcon
            sx={{ color: selectedIndex === 0 ? "#5e35b1" : "#424242" }}
          >
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "body2" }}
            primary="Default"
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => handleSelectedList(1)}
          sx={{
            width: "90%",
            color: "#424242",
            borderRadius: "10px",
            "&:hover, &:active": { color: "#5e35b1", bgcolor: "#ede7f6" },
            "&.Mui-selected": { color: "#5e35b1", bgcolor: "#ede7f6" },
          }}
        >
          <ListItemIcon
            sx={{ color: selectedIndex === 1 ? "#5e35b1" : "#424242" }}
          >
            <Inbox />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "body2" }}
            primary="Analytics"
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={() => handleSelectedList(2)}
          sx={{
            width: "90%",
            color: "#424242",
            borderRadius: "10px",
            "&:hover": { color: "#5e35b1", bgcolor: "#ede7f6" },
            "&.Mui-selected": { color: "#5e35b1", bgcolor: "#ede7f6" },
          }}
        >
          <ListItemIcon
            sx={{ color: selectedIndex === 2 ? "#5e35b1" : "#424242" }}
          >
            <Inbox />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "body2" }}
            primary="Statistics"
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 3}
          onClick={() => handleSelectedList(3)}
          sx={{
            width: "90%",
            color: "#424242",
            borderRadius: "10px",
            "&:hover": { color: "#5e35b1", bgcolor: "#ede7f6" },
            "&.Mui-selected": { color: "#5e35b1", bgcolor: "#ede7f6" },
          }}
        >
          <ListItemIcon
            sx={{ color: selectedIndex === 3 ? "#5e35b1" : "#424242" }}
          >
            <Inbox />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "body2" }}
            primary="Data"
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 4}
          onClick={() => handleSelectedList(4)}
          sx={{
            width: "90%",
            color: "#424242",
            borderRadius: "10px",
            "&:hover": { color: "#5e35b1", bgcolor: "#ede7f6" },
            "&.Mui-selected": { color: "#5e35b1", bgcolor: "#ede7f6" },
          }}
        >
          <ListItemIcon
            sx={{ color: selectedIndex === 4 ? "#5e35b1" : "#424242" }}
          >
            <Inbox />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "body2" }}
            primary="Chart"
          />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default XSSideBar;

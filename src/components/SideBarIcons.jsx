import { List, ListItemButton, ListItemIcon } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Inbox } from "@mui/icons-material";
import { useState } from "react";

function SideBarIcons() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectedList = (index) => setSelectedIndex(index);

  return (
    <List>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={() => handleSelectedList(0)}
        sx={{
          my: 1,
          width:'60px',
          mx:'auto',
          color: "#424242",
          borderRadius: "20%",
          bgcolor: "white",
          "&:hover": { color: "#5e35b1", bgcolor: "#ede7f6" },
          "&.Mui-selected": { color: "#5e35b1", bgcolor: "#ede7f6" },
        }}
      >
        <ListItemIcon
          sx={{color: selectedIndex === 0 ? "#5e35b1" : "#424242" }}
        >
          <MailIcon />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 1}
        onClick={() => handleSelectedList(1)}
        sx={{
          my: 1,
          width:'60px',
          mx:'auto',
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
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 2}
        onClick={() => handleSelectedList(2)}
        sx={{
          my: 1,
          width:'60px',
          mx:'auto',
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
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 3}
        onClick={() => handleSelectedList(3)}
        sx={{
          my: 1,
          width:'60px',
          mx:'auto',
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
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 4}
        onClick={() => handleSelectedList(4)}
        sx={{
          my: 1,
          width:'60px',
          mx:'auto',
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
      </ListItemButton>
    </List>
  );
}

export default SideBarIcons;

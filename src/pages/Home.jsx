import { Box, Collapse, Container, CssBaseline, Grid } from "@mui/material";
import React, { useState } from "react";
import { DefaultSection, Header, SideBar, SideBarIcons, XSSideBar } from "../components";

function Home() {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <Box>
      <Container component="section" maxWidth="xl">
        <Header open={handleMenuOpen} />
        <Grid container marginTop={2}>
          <Grid item sx={{display:{xs:'none',md:'grid'}}} md={menuOpen ? 3 : 1} lg={menuOpen ? 2 : 1}>
            {menuOpen ? (
              <Collapse  in={menuOpen}>
                <SideBar />
              </Collapse>
            ) : (
                <SideBarIcons />
              
            )}
          </Grid>
          <Grid item sx={{display:{xs:'grid',md:'none'}}}>
            {!menuOpen && <XSSideBar />}
          </Grid>
          <Grid item xs={12} md={menuOpen ? 9 : 11} lg={menuOpen ? 10 : 11}>
            <DefaultSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;

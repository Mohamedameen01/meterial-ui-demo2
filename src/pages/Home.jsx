import { Box, Container, CssBaseline, Grid } from "@mui/material";
import React from "react";
import { DefaultSection, Header, SideBar } from "../components";

function Home() {
  return (
    <Box>
      <Container component="section" maxWidth="xl">
        <Header />
        <Grid container marginTop={2}>
          <Grid item xs={12} md={2}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={10}>
            <DefaultSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;

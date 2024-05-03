import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';

function DefaultSection() {
  const [isMonth, setMonth] = useState(true);

  const handleMonthClick = () => {
    setMonth(false);
    console.log(isMonth);
  };
  const handleYearClick = () => {
    setMonth(true);
    console.log(isMonth);
  };
  return (
    <Box bgcolor="#e3f2fd" padding={2}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <Card
              sx={{
                color: "rgb(255, 255, 255)",
                bgcolor: "rgb(94, 53, 177)",
                borderRadius: 2,
              }}
            >
              <CardContent
                sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  sx={{
                    bgcolor: "#4527a0",
                    borderRadius: 2,
                    minWidth: "fit-content",
                    "&:hover": { bgcolor: "#4527a0" },
                  }}
                >
                  <AccountBalanceOutlinedIcon
                    sx={{ color: "rgb(255, 255, 255)" }}
                  />
                </Button>
                <Button
                  sx={{
                    bgcolor: "#4527a0",
                    border: "gray",
                    borderRadius: 2,
                    minWidth: "fit-content",
                    "&:hover": { bgcolor: "#4527a0" },
                  }}
                >
                  <MoreHorizIcon sx={{ color: "rgb(227, 232, 239)" }} />
                </Button>
              </CardContent>
              <CardContent>
                <Typography variant="h4" fontWeight="bold">
                  $500
                </Typography>
                <Typography color="#b39ddb">Total Balance</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <Card
              sx={{
                color: "rgb(255, 255, 255)",
                bgcolor: "#1e88e5",
                borderRadius: 2,
              }}
            >
              <CardContent
                sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  sx={{
                    bgcolor: "#1565c0",
                    borderRadius: 2,
                    minWidth: "fit-content",
                    "&:hover": { bgcolor: "#1565c0" },
                  }}
                >
                  <LocalMallOutlinedIcon sx={{ color: "rgb(255, 255, 255)" }} />
                </Button>
                <Stack direction="row" spacing={2}>
                  <Button
                    onClick={handleMonthClick}
                    size="small"
                    sx={{
                      bgcolor: isMonth ? "none" : "#2196f3",
                      fontSize: "12px",
                      fontWeight: "semi-bold",
                      color: "rgb(255, 255, 255)",
                      borderRadius: 2,
                      minWidth: "fit-content",
                      "&:hover": { bgcolor: isMonth ? "none" : "#2196f3" },
                    }}
                  >
                    Month
                  </Button>
                  <Button
                    onClick={handleYearClick}
                    size="small"
                    sx={{
                      bgcolor: isMonth ? "#2196f3" : "none",
                      fontSize: "12px",
                      fontWeight: "semi-bold",
                      color: "rgb(255, 255, 255)",
                      borderRadius: 2,
                      minWidth: "fit-content",
                      "&:hover": { bgcolor: isMonth ? "#2196f3" : "none" },
                    }}
                  >
                    Year
                  </Button>
                </Stack>
              </CardContent>
              <CardContent>
                <Typography variant="h4" fontWeight="bold">
                  $200
                </Typography>
                <Typography color="#90caf9">Total Expense</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item container direction='column' rowGap={2} xs={12} sm={6} lg={4}>
            <Card
              sx={{
                display:'flex',
                color: "rgb(255, 255, 255)",
                bgcolor: "#1e88e5",
                borderRadius: 2,
              }}
              item
            >
              <CardContent>
                <Button
                  sx={{
                    bgcolor: "#1565c0",
                    color: "rgb(255, 255, 255)",
                    borderRadius: 2,
                    minWidth: "fit-content",
                    "&:hover": { bgcolor: "#1565c0" },
                  }}
                >
                  <MoveToInboxOutlinedIcon />
                </Button>
              </CardContent>
              <CardContent>
                <Typography variant="body1" fontWeight="bold">$100</Typography>
                <Typography  color='#e3f2fd' variant="caption">Total Credit</Typography>
              </CardContent>
            </Card>

            <Card sx={{display:{xs:'none',lg:'flex'},bgcolor:'#fffffff5',borderRadius:2}}>
              <CardContent>
                <Button sx={{bgcolor:'#fff8e1',color:'#ffc107',borderRadius:2,minWidth:'fit-content','&:hover':{bgcolor:'#fff8e1'} }}><AddBusinessOutlinedIcon /></Button>
              </CardContent>
              <CardContent>
                <Typography variant="body1" fontWeight="bold">$100</Typography>
                <Typography color='#697586' variant="caption">Total Credit</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid sx={{display:{lg:'none'}}} item container direction='column' rowGap={2} xs={12} sm={6} lg={4}>
            <Card sx={{display:'flex',bgcolor:'#fffffff5',borderRadius:2}}>
              <CardContent>
                <Button sx={{bgcolor:'#fff8e1',color:'#ffc107',borderRadius:2,minWidth:'fit-content','&:hover':{bgcolor:'#fff8e1'} }}><AddBusinessOutlinedIcon /></Button>
              </CardContent>
              <CardContent>
                <Typography variant="body1" fontWeight="bold">$100</Typography>
                <Typography color='#697586' variant="caption">Total Credit</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DefaultSection;

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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function DefaultSection() {
  const [isMonth,setMonth] = useState(true);

  const handleMonthClick = () => {
    setMonth(false)
    console.log(isMonth);
  };
  const handleYearClick = () => {
    setMonth(true)
    console.log(isMonth);
  };
  return (
    <Box bgcolor="#e3f2fd">
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
          >
            <Card sx={{
              color: "rgb(255, 255, 255)",
              bgcolor: "rgb(94, 53, 177)",
              borderRadius: 2,
            }}>
              <CardContent sx={{mt:2,display:'flex',justifyContent:'space-between'}}>
                <Button sx={{bgcolor:'#4527a0',borderRadius:2,minWidth:'fit-content','&:hover':{bgcolor:'#4527a0'}}}>
                  <AccountBalanceOutlinedIcon sx={{color: "rgb(255, 255, 255)"}} />
                </Button>
                <Button sx={{bgcolor:'#4527a0',border:'gray',borderRadius:2,minWidth:'fit-content','&:hover':{bgcolor:'#4527a0'}}}>
                  <MoreHorizIcon sx={{color:"rgb(227, 232, 239)"}} />
                </Button>
              </CardContent>
              <CardContent>
                <Typography variant="h4" fontWeight='bold'>$ 500</Typography>
                <Typography color='#b39ddb'>Total Balance</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{
              color: "rgb(255, 255, 255)",
              bgcolor: "#1e88e5",
              borderRadius: 2,
            }}>
              <CardContent sx={{mt:2,display:'flex',justifyContent:'space-between'}}>
                <Button sx={{bgcolor:'#1565c0',borderRadius:2,minWidth:'fit-content','&:hover':{bgcolor:'#1565c0'}}}>
                  <LocalMallOutlinedIcon sx={{color: "rgb(255, 255, 255)"}} />
                </Button>
                <Stack direction="row" spacing={2} >
                  <Button onClick={handleMonthClick} size="small" sx={{bgcolor: isMonth ? 'none'  : '#2196f3',fontSize:'12px',fontWeight:"semi-bold",color: "rgb(255, 255, 255)",borderRadius:2,minWidth:'fit-content','&:hover':{bgcolor: isMonth ? 'none'  : '#2196f3'}}} >Month</Button>
                  <Button onClick={handleYearClick} size="small" sx={{bgcolor: isMonth ? '#2196f3' : 'none',fontSize:'12px',fontWeight:'semi-bold',color: "rgb(255, 255, 255)",borderRadius:2,minWidth:'fit-content','&:hover':{bgcolor: isMonth ? '#2196f3' : 'none'}}} >Year</Button>
                </Stack>
              </CardContent>
              <CardContent>
                <Typography variant="h4" fontWeight='bold'>$ 200</Typography>
                <Typography color='#b39ddb'>Total Expense</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid item>Total Credit</Grid>
            <Grid item>Total Income</Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DefaultSection;

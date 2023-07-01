import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography, Link, Button } from '@mui/material';

const AppHeader = () => {
  return (<>
    <AppBar position="static" sx={{ backgroundColor: 'grey.50'}}>
      <CssBaseline />
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
        <div style={{paddingRight: "2em"}}>
          <Link to="/" sx={{color: 'grey.800', textDecoration:'none'}}>
            Products
          </Link>
          <Link to="/" sx={{marginLeft: '1em', color: 'grey.800', textDecoration:'none'}}>
            Resources
          </Link>
          <Link to="/" sx={{marginLeft: '1em', color: 'grey.800', textDecoration:'none'}}>
            Inspiration
          </Link>
          <Link to="/" sx={{marginLeft: '1em', color: 'grey.800', textDecoration:'none'}}>
            Pricing
          </Link>
        </div>
        <Typography variant="h4" sx={{color: 'grey.800', fontFamily:'fantasy'}}>
          PostApe
        </Typography>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Link sx={{marginLeft: '1em', color: 'grey.800', textDecoration:'none', marginRight: '1em'}}>
            Sales: +1(123) 456-7890
          </Link>
          <Button variant="outlined">
              Login
          </Button>
          <Button variant="contained" sx={{marginLeft: '1em'}}>
              Sign up Now
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  </>)
}

export default AppHeader;
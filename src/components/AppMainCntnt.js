import React from "react";
import { Grid, Button, Typography } from '@mui/material';
import Image from 'mui-image';
import EmailsSvg from '../imgs/undraw_emails_re_cqen.svg';

const AppMainContent = () => {
    return <>
      <Grid container spacing={2} sx={{marginBottom: "12em"}}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
           alignItems: "center", textAlign: "center", padding: "0 8em !important"}}>
          <Typography variant="h3">
            Turn Emails into Revenue
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "100", margin: "1em 0", padding: "0 1em"}}>
            Win new customers with the #1 email marketing and automations brand that recommends ways to get more opens, clicks, and sales.
          </Typography>
          <Button variant="contained" sx={{maxWidth: "300px"}}>
              Sign up Now
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center"}}>
          <Image src={EmailsSvg} width="60%"/>
        </Grid>
      </Grid>
    </>
}

export default AppMainContent;
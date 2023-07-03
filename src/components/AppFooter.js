import React from "react";
import { Container, Grid, Typography } from '@mui/material';
import { LINKS } from "../utils/Constants";

const AppFooter = ({}) => {
    return <>
        <Container maxWidth={false} sx={{backgroundColor: "primary.main", margin: "0", padding: "0", minHeight: "50em",
            display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h5" sx={{ fontWeight: "100", textDecoration: "underline", 
            color: "grey.100", marginTop: "2em"}}>
                Related Links: Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.
            </Typography>
            <Container maxWidth={false} sx={{ margin: "2em 0", borderBottom: "2px solid #fafafa"}}/>

            <Grid container spacing={5} sx={{ color: "grey.100", marginBottom: "7em"}}>
                <Grid item xs={1}/>
                {
                    LINKS.map(link => {
                        return (<>
                            <Grid item xs={2}>
                                <Container>
                                    <Typography variant="h6" sx={{ marginBottom: "1em" }}>
                                        {link.header}
                                    </Typography>
                                    {
                                        link.links.map(str => {
                                            return (<>
                                                <Typography variant="body1" sx={{ fontWeight: "100", textDecoration: "underline", marginBottom: "10px"}}>
                                                    {str}
                                                </Typography>
                                            </>)
                                        })
                                    }
                                </Container>
                            </Grid>
                        </>)
                    })
                }
                <Grid item xs={1}/>
            </Grid>
        </Container>
    </>
}

export default AppFooter;
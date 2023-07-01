import React from "react";
import Image from 'mui-image';
import { Button, Container, Typography } from "@mui/material";

const FeatureCard = ({
    feature
}) => {
    return <>
        <Container sx={{backgroundColor: `${feature?.color}`, padding: "0 3em !important", width: '550px', borderRadius: "1em",
            minHeight: "600px", display: "flex", flexDirection: "column", justifyContent: "center"}}> 
            <div style={{ margin: "0 auto"}}>
                <Image src={feature?.imgPath} width="300px" height="300px" sx={{ objectFit: "fill"}}/>
            </div>
            <Typography variant="h6" sx={{ color: "grey.100", paddingTop: "1.5em", marginBottom: "5px"}}>
                {feature?.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "grey.100", marginBottom: "1em"}}>
                {feature?.summary}
            </Typography>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white", maxWidth: "150px"}}> Learn More </Button>
        </Container>
    </>
}

export default FeatureCard;
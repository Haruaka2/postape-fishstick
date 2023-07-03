import React from "react";
import { Container, Typography } from '@mui/material';
import Image from "mui-image";

const IntegrationCard = ({
    integration,
}) => {
    return <>
        <Container sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Image src={integration?.imgUrl} sx={{width: "100px !important", height: "100px !impotant"}}
                width="100px" height="100px"/>
            <div style={{ marginLeft: "1em"}}>
                <Typography variant="h6">
                    {integration?.name}
                </Typography>
                <Typography variant="subtitle1">
                    {integration?.desc}
                </Typography>
            </div>
        </Container>
    </>
}

export default IntegrationCard;
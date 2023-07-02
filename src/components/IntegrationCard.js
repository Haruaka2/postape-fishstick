import React from "react";
import { Container, Typography } from '@mui/material';
import Image from "mui-image";

const IntegrationCard = ({
    integration,
}) => {
    return <>
        <Container sx={{display: "flex", flexDirection: "row"}}>
            <Image src={integration?.imgUrl} width="100px" height="100px"/>
            <div>
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
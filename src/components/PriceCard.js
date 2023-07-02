import React from "react";
import { Container, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const PriceCard = ({
    price
}) => {
    return <>
        <Container sx={{border: '3px solid #2196f3', height: "40em"}}>
            <Typography variant="h6" sx={{marginTop: "1em"}}>
                {price?.title}
            </Typography>
            <Typography variant="body1">
                {price?.subtitle}
            </Typography>
            <div style={{ margin: "1em 0 2em 0"}}>
            <Typography variant="h3"> 
                ${price?.price} 
            </Typography>
            </div>
            {
                price?.notes?.length > 0 ? price.notes.map(note => {
                    return (<>
                        <div style={{display: "flex", flexDirection: "row", 
                            marginBottom: "2em", borderBottom: "1px solid #e0e0e0"}}>
                        {
                            note.isChecked ? <CheckIcon/> : <CloseIcon/>
                        }
                        <Typography variant="body2">
                            {note.text}
                        </Typography>
                        </div>
                    </>)
                }) : <></>
            }
        </Container>
    </>
}

export default PriceCard;
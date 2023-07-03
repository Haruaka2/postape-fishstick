import React from "react";
import { Container, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const PriceCard = ({
    price
}) => {
    return <>
        <Container sx={{border: '3px solid #2196f3', height: "45em"}}>
            <Typography variant="h6" sx={{marginTop: "1em"}}>
                {price?.title}
            </Typography>
            <Typography variant="body1">
                {price?.subtitle}
            </Typography>
            <div style={{ margin: "1em 0 2em 0"}}>
                <Typography variant="caption" sx={{fontWeight: "200", color: "grey.500"}}>
                    {price?.beforePriceTxt}
                </Typography>
                <Typography variant="h3"> 
                    ${price?.price} 
                </Typography>
                <Typography variant="caption" sx={{fontWeight: "200", color: "grey.500"}}>
                    {price?.afterPriceTxt}
                </Typography>
                {price?.title === "Free" && <div style={{marginBottom: "3.2em"}}></div>}
            </div>
            {
                price?.notes?.length > 0 ? price.notes.map(note => {
                    return (<>
                        <div style={{display: "flex", flexDirection: "row", 
                            marginBottom: "2em", borderBottom: "1px solid #e0e0e0"}}>
                            {
                                note.isChecked ? <CheckIcon/> : <CloseIcon sx={{color: "grey.400"}}/>
                            }
                            <Typography variant="body2" sx={{marginLeft: "5px", paddingBottom: ".7em",
                                color: note?.isChecked ? 'blueGrey.900' : 'grey.400' }}>
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
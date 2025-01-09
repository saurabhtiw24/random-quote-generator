import React from "react";
// import './App.css';
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import Button from "./Button";



const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) => (
    <Card>
        <CardContent>
                    <Typography id="text">
                        {selectedQuote.quote} 
                    </Typography>
                    <Typography align="right">
                        - <span id="author">{selectedQuote.author}</span>
                    </Typography>
        </CardContent>
        <CardActions style={{
            display:"flex",
            justifyContent:"space-between"
         }}>
            <IconButton
            id="tweet-quote"
            target="_blank"
            href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}hashtags=quotes`)}>
                <FontAwesomeIcon icon={faTwitter} size="md" color="pink"></FontAwesomeIcon>
            </IconButton>
            <Button style={{  
        borderRadius: 15,
        backgroundColor: "pink",
        color: "black",
        padding: "9px 15px",
    }} id="new-quote" size="small" onClick={assignNewQuoteIndex}>Next Quote</Button>
        </CardActions>
    </Card>
)

export default QuoteMachine
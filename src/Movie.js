import { useState } from 'react';
import { Counter } from './Counter';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Movie({ name, ratings, summary, pic }) {

  const [show, setShow] = useState(true);
  //Conditional styling
  const styles = {
    color: ratings < 8 ? "red" : "green",
    fontWeight: "bold",
  };

  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <Card className="movie-container">
      <img
        src={pic}
        alt={name}
        className="movie-poster" />
        <CardContent>
      <div className="movie-specs">
        <h3 className="movie-name">{name}{" "}
        <IconButton 
      onClick={() => { setShow(!show); }} 
      className="movie-show-button" 
      aria-label="hide" color="primary">
      {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
  </IconButton>
        </h3>
        <p className="movie-rating" style={styles}>⭐{ratings}</p>
      </div>
      
     {/* {show ? "Hide" : "Show"} */}

      {/* //Conditonal Rendering */}
      {show ? <p className="movie-summary">{summary}</p> : ""}


      {/* <p style={summaryStyles} class = "movie-summary">{summary}</p> */}
      <CardActions>
      <Counter />
      </CardActions>
      </CardContent>
      
    </Card>
  );
}

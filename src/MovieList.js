import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useHistory } from "react-router-dom";


export function MovieList({ movies,setMovies }) {
  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, ratings, summary, pic} ,index) => (
        <Movie
          name={name}
          ratings={ratings}
          summary={summary}
          pic={pic} 
          id={index}
           deleteButton={ 
           <IconButton 
            onClick={() => {
              console.log("deleting index...",index);
              const deleteIdx = index;
              const remainingMovies=movies.filter((mv,idx)=>idx!==deleteIdx)
              console.log("Remaining", remainingMovies);
              setMovies(remainingMovies);
            } } 
            className="movie-show-button" 
            aria-label="delete movie" 
            color="error">
                
            <DeleteTwoToneIcon />
        </IconButton>
           }
           editButton={
             <IconButton style={{marginLeft:"auto"}}
            onClick={() => history.push("/movies/edit/" +index) } 
            className="movie-show-button" 
            aria-label="edit movie" 
            color="primary">
          
            <EditTwoToneIcon />
        </IconButton>
           }
           />
      ))}
    </section>
  );
}

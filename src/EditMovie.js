import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";

export function EditMovie({ movies, setMovies }) {
  const { id } = useParams();
  const movie = movies[id];
  console.log(id,movie);
  const [name, setName] = useState(movie.name);
  const [pic, setPoster] = useState(movie.pic);
  const [ratings, setRating] = useState(movie.ratings);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const editMovie = () => {
    // console.log("Adding movies...", name, pic, ratings, summary);
    const updatedMovie = { name, pic, ratings, summary, trailer };

    console.log(updatedMovie);
    // setMovies([...movies, updatedMovie]);

    const copyMovieList=[...movies];
    copyMovieList[id]=updatedMovie;
    setMovies(copyMovieList);
  };

  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={(event) => setName(event.target.value)}
        label="Name" variant="filled" />

      <TextField value={pic} onChange={(event) => setPoster(event.target.value)}
        label="Image" variant="filled" />

      <TextField value={ratings} onChange={(event) => setRating(event.target.value)}
        label="Rating" variant="filled" />

      <TextField value={summary} onChange={(event) => setSummary(event.target.value)}
        label="Summary" variant="filled" />

<TextField value={trailer} onChange={(event) => setTrailer(event.target.value)}
        label="Trailer" variant="filled" />

      <Button onClick={editMovie} variant="contained" color="secondary">
        Save
      </Button>

    </div>

  );
}

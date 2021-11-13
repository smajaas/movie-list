import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [pic, setPoster] = useState("");
  const [ratings, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    // console.log("Adding movies...", name, pic, ratings, summary);
    const newMovie = { name, pic, ratings, summary, trailer };

    console.log(newMovie);
    setMovies([...movies, newMovie]);
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

      <Button className="add-button" onClick={addMovie} variant="contained" color="secondary">
        Save
      </Button>

    </div>

  );
}

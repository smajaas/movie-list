import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [pic, setPoster] = useState("");
  const [ratings, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    console.log("Adding movies...", name, pic, ratings, summary);
    const newMovie = { name: name, pic: pic, ratings: ratings, summary: summary };

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
      <Button className="add-button" onClick={addMovie} variant="contained" color="secondary">
        Add Movie
      </Button>

    </div>

  );
}

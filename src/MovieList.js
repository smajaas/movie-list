import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({ name, ratings, summary, pic} ,index) => (
        <Movie
          name={name}
          ratings={ratings}
          summary={summary}
          pic={pic} 
          id={index}/>

      ))}
    </section>
  );
}

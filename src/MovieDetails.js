import { useParams } from "react-router-dom";

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  console.log(movie);
  const styles = {
    color: movie.ratings < 8 ? "red" : "green",
    fontWeight: "bold",
  };

  return (
    <div>
      <iframe
        width="70%"
        height="500"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe>

      <div className="movie-detail-container">


        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}

          </h3>
          <p className="movie-rating" style={styles}>⭐{movie.ratings}
          </p>
        </div>

        <p className="movie-summary">{movie.summary}</p>
      </div>
    </div>

  );
}

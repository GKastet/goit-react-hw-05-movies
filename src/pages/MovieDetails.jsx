import { requestMovie } from 'Api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { MovieDetailsCompon } from 'components/movieDetailsCompon/movieDetailsCompon';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const endPointDetails = `/movie/${movieId}`;
        const responcedDetails = await requestMovie(endPointDetails);
        setMovieDetails(responcedDetails);
        //console.log(responcedDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);
  //console.log(movieDetails);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      {movieDetails && (
        <>
          <MovieDetailsCompon
            movieDetails={movieDetails}            
          />
          {/* <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
              alt={`${movieDetails.title}`}
            />
            <h1>
              {movieDetails.title} ({movieDetails.release_date.substring(0, 4)})
            </h1>
            <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <span>{movieDetails.overview}</span>
            <h3>Genres</h3>
            <span>
              {movieDetails.genres.map(genre => {
                return <p key={genre.id}>{genre.name}</p>;
              })}
            </span>
          </div> */}
        </>
      )}
      <ul>
        Additional information
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

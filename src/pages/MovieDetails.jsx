import { requestMovie } from 'Api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { MovieDetailsCompon } from 'components/movieDetailsCompon/movieDetailsCompon';
import UlStyled from 'components/StyledPages/MovieDetailsStyled';

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
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);  

  return (
    <div>
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      {movieDetails && (
        <>
          <MovieDetailsCompon
            movieDetails={movieDetails}            
          />     
      
        </>
      )}
      <UlStyled>
        Additional information
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </UlStyled>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

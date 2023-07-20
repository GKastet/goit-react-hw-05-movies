import { requestMovie } from 'Api/api';
import Loader from 'components/Loader/Loader';
import FormStyled from 'components/StyledPages/MoviesStyled';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieResult, setMovieResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();  
  const queryValue = searchParams.get('query');  

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    async function fetchMovie() {
      try {
        setIsLoading(true);        
        const endPoint = `/search/movie?query=${queryValue}`;
        const responcedMovie = await requestMovie(endPoint);
        setMovieResult(responcedMovie.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [queryValue]);  

  const formOnSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.children.search.value;    
    setSearchParams({ query: searchValue });
  };
  
  return (
    <>
      <FormStyled>
        <form onSubmit={formOnSubmit}>
          <input
            name="search"
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search movie..."
            required
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>

        {isLoading && <Loader />}
        {error && <>Oops... Error: {error}</>}
        <ul>
          {movieResult &&
            movieResult.map(movie => (
              <li key={movie.id}>
                <Link state={{ from: location }} to={`${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </FormStyled>
    </>
  );
};

export default Movies;

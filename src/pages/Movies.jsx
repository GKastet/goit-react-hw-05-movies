import { requestMovie } from 'Api/api';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieResult, setMovieResult] = useState(null);
  
  useEffect(() => {
    if (!movieName) {
      return;
    }
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const endPoint = `/search/movie?query=${movieName}`;
        const responcedMovie = await requestMovie(endPoint);
        setMovieResult(responcedMovie.results);

        // console.log(responcedMovie);
        // console.log(movieName);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieName]);
  movieResult && console.log(movieResult);

//   const handleOnChange = (evt)=>{
//     return evt.target.value
//   }

  const formOnSubmit = evt => {
    evt.prevent.default();
    // onSubmit(pictureName);
    
    //setMovieName(evt.target.value)
    //setMovieName('');
  };
  return (
    <>
      <div>
        <form onSubmit={formOnSubmit}>
          <input
            name="movieName"
            value={movieName}            
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search movie..."
            //onChange = {handleOnChange}
            onChange={evt => setMovieName(evt.target.value)}
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
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;


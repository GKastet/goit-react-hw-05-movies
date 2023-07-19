import { requestMovie } from 'Api/api';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import MovieDetails from './MovieDetails';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //const {movieId} = useParams
  useEffect(() => {
    async function fetchMovieTrends() {
      try {
        setIsLoading(true);
        const endPointTrends = '/trending/movie/day';
        const responcedTrends = await requestMovie(endPointTrends);
        setTrendMovies(responcedTrends.results);
        //console.log(responcedTrends.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieTrends();
  }, []);
  return (
    <>
      <p>Home page element</p>
      <h2>Top of the day</h2>
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      <ul>
        {trendMovies.map(trendMovies => (
          <li key={trendMovies.id}>
            <Link to={`movies/${trendMovies.id}`}>{trendMovies.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

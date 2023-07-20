import { requestMovie } from 'Api/api';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieTrends() {
      try {
        setIsLoading(true);
        const endPointTrends = '/trending/movie/day';
        const responcedTrends = await requestMovie(endPointTrends);
        setTrendMovies(responcedTrends.results);
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
      <h2>Trending today</h2>
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

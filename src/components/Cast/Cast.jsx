import { requestMovie } from 'Api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastStyled from './CastStyled';

const Cast = () => {
  const [responcedCredits, setMovieCredits] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCastDetails() {
      try {
        setIsLoading(true);
        const endPointCredits = `/movie/${movieId}/credits`;
        const responcedCredits = await requestMovie(endPointCredits);
        setMovieCredits(responcedCredits);        
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCastDetails();
  }, [movieId]);

  return (
    <CastStyled>
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      {responcedCredits && (
        <ul>
          {responcedCredits.cast.map(credit => (
            <li key={credit.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
                alt={credit.name}
              />              
              <p>{credit.name}</p>
              <span>Character: {credit.character}</span>
            </li>
          ))}
        </ul>
      )}
    </CastStyled>
  );
};

export default Cast;

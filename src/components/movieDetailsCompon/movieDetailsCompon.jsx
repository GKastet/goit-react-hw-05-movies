import { useLocation } from 'react-router-dom';
import MovieStyled, { LinkStyled } from './movieDetailsComponStyled';
import { useRef } from 'react';

export const MovieDetailsCompon = ({ movieDetails }) => {
  const location = useLocation();  
  const backLinkRef = useRef(location.state?.from);

  return (
    <>
      <LinkStyled to={backLinkRef.current ?? '/'}>Go back</LinkStyled>
      <MovieStyled>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          alt={`${movieDetails.title}`}
        />
        <div>
          <h1>
            {movieDetails.title} ({movieDetails.release_date.substring(0, 4)})
          </h1>
          <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h3>Overview:</h3>
          <span>{movieDetails.overview}</span>
          <h3>Genres:</h3>
          <span>{movieDetails.genres.map(genre => genre.name).join(', ')}</span>
        </div>
      </MovieStyled>
    </>
  );
};
export default MovieDetailsCompon;

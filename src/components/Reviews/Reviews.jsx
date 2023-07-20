import { requestMovie } from 'Api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [responcedReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviewDetails() {
      try {
        setIsLoading(true);
        const endPointReviews = `/movie/${movieId}/reviews`;
        const responcedReviews = await requestMovie(endPointReviews);
        setMovieReviews(responcedReviews);        
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviewDetails();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      {responcedReviews && (
        <>
          <p></p>
          <ul>
            {responcedReviews.results?.length <= 0 ? (
              <p>We don't have any reviews for this movie yet.</p>
            ) : (
              responcedReviews.results.map(review => (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              ))
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Reviews;

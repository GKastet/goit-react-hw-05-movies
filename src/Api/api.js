import axios from 'axios';

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

//const endPoint1 = '/trending/movie/day'
//const endPoint2 = '/search/search-movies'
//const endPoint3 = '/movie/get-movie-details'
const baseUrl = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: '68cdab9130cffabea4ae33a0f4180d48',
    // page: 1,
  },
});

//0======================
export const requestMovie = async (endPoint) => {
  const { data } = await instance.get(endPoint);
  //console.log(data);
  return data;
};

//1======================
// export const requestMovieTrends = async (endPoint) => {
//   const { data } = await instance.get(endPoint);
//   //console.log(data);
//   return data;
//};
//2======================
// export const requestMovieSearch = async () => {
//   const { data } = await instance.get('/search/search-movies');
//   console.log(data);
//   return data;
// };
//3======================
// export const requestMovieDetails = async () => {
//   const { data } = await instance.get('/movies/get-movie-details');
//   console.log(data);
//   return data;
// };
//4=======================
// export const requestMovieCredits = async () => {
//   const { data } = await instance.get('/movies/get-movie-credits');
//   console.log(data);
//   return data;
// };
//5========================
// export const requestMovieReviews = async () => {
//   const { data } = await instance.get('/movies/get-movie-reviews');
//   console.log(data);
//   return data;
// };



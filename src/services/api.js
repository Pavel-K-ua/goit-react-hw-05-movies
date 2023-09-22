import axios from 'axios';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDM1OGZmZWM3YzYyYzU2NGFkNGVhZWIwYTg0NzUxZCIsInN1YiI6IjY1MGI0NmNmNTAxY2YyMDBjNmJiYzQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wvamPmbpdrrLWGlyfoVdDeyUlAy0z5h3P12zVjSMD-0',
  },
};

export const getTrending = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  console.log(`getTrending`, data.results);
  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  console.log(`searchMovies`, data.results);
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  console.log(`getMovieDetails`, data);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  console.log(`getMovieCredits`, data.cast);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  console.log(`getMovieReviews`, data.results);
  return data.results;
};

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

import { Route, Routes } from 'react-router-dom';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getTrending,
  searchMovies,
} from 'services/api';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  // getTrending();
  // searchMovies('batman');
  // getMovieDetails('2661');
  // getMovieCredits('2661');
  // getMovieReviews('268');

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />;
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </>
  );
};

import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/api';

const Home = () => {
  const { data: movies, loading, error } = useHttp(getTrending);

  return (
    <>
      <h2>Trending</h2>
      {loading && <h2>Loading....</h2>}
      {error && <h2>Smth went wrong, try again!</h2>}
      <ol>
        {movies?.map(
          ({
            id,
            title,
            name,
            // backdrop_path,
            // poster_path,
            // overview,
            // release_date,
          }) => (
            <li key={id}>
              <Link to={`/movies/${id.toString()}`}>{title || name}</Link>
            </li>
          )
        )}
      </ol>
    </>
  );
};

export default Home;

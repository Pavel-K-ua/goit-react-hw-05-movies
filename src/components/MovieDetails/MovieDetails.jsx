import { useHttp } from 'hooks/useHttp';
import { nanoid } from 'nanoid';
import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { styled } from 'styled-components';

const MovieDetails = () => {
  const { id } = useParams();

  const { data } = useHttp(getMovieDetails, id);
  const { original_title, overview, poster_path, release_date, genres } = data;

  return (
    <StyledWrapper style={{ padding: '0 20px' }}>
      <div>
        <img
          width={280}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <h2>
          {original_title} {`(${release_date?.slice(0, 4)})`}
        </h2>
        <h2>Overview:</h2>
        <p>{overview}</p>
        <h2>Genres:</h2>
        <p key={nanoid()}>
          {genres?.map(genre => (
            <span>{` ${genre.name} `}</span>
          ))}
        </p>
        <hr />
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Outlet />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default MovieDetails;

import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Cast = () => {
  const { id } = useParams();

  const { data: actors } = useHttp(getMovieCredits, id);
  // const { name, profile_path, character,credit_id } = data;
  const actorsOnlyArr = actors.filter(actor => !actor.job);

  return (
    <div>
      <ul>
        {actorsOnlyArr.map(actor => (
          <li key={actor.credit_id}>
            {actor.profile_path ? (
              <img
                width={100}
                src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img
                width={100}
                src="/src/images/no-image-icon.png"
                alt={actor.name}
              />
            )}
            <h3>Name: {actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

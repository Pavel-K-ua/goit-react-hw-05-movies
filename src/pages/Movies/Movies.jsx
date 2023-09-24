import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api';

const Movies = () => {
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const submit = data => {
    setSearchParams(data.queryStr && { query: data.queryStr.trim() });
  };

  const query = searchParams.get('query') || '';

  const { data } = useHttp(searchMovies, query);
  const location = useLocation();

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register('queryStr')} type="text" />
        <button>Search</button>
      </form>
      {data?.length ? (
        <ol>
          {data?.map(({ id, title }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`${id.toString()}`}>
                {title}
              </Link>
            </li>
          ))}
        </ol>
      ) : null}
      {!data?.length && query ? <p>Nothing found</p> : null}
    </>
  );
};

export default Movies;

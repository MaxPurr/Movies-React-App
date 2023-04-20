import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList';
import { Form, Input, Button } from './Movies.styled';
import { Message } from '../components/Message.styled';

const Movies = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetch = async () => {
      try {
        setMovies(await searchMovies(query));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, [query]);

  const search = evt => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements['search_query'].value;
    const nextParams = query.replaceAll(' ', '') ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Form onSubmit={search}>
        <Input
          name="search_query"
          type="text"
          placeholder="Search for a movie..."
        />
        <Button type="submit">Search</Button>
      </Form>
      {movies.length === 0 && query ? (
        <Message>{`No result for the query "${query}" ;(`}</Message>
      ) : (
        <MoviesList
          movies={movies}
          from={location.pathname + location.search}
        />
      )}
    </>
  );
};

export default Movies;

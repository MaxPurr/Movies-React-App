import { getTrending } from '../services/api';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setMovies(await getTrending());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MoviesList movies={movies} from="/" />
    </>
  );
};

export default Home;

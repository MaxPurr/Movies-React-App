import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const api_key = 'a319e917b3467e05f7f58bcf403053f1';

const fetch = async (path, params = {}) => {
  params.api_key = api_key;
  params.language = 'en-US';
  const responce = await axios.get(path, { params: params });
  if (responce.status !== 200) {
    throw new Error(responce.status);
  }
  return responce.data;
};

export const getTrending = async () => {
  try {
    const responce = await fetch('trending/movie/day');
    const movies = responce.results.map(movie => {
      return {
        title: movie.title,
        id: movie.id,
        poster:
          'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' +
          movie.poster_path,
      };
    });
    return movies;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async movieid => {
  try {
    const responce = await fetch(`movie/${movieid}`);
    const movieDetails = {
      poster:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' +
        responce.poster_path,
      title: responce.title,
      userScore: Math.round(responce.vote_average * 10),
      overview: responce.overview,
      genres: responce.genres.map(genre => genre.name),
    };
    return movieDetails;
  } catch (error) {
    throw error;
  }
};

export const getMovieCast = async movieid => {
  try {
    const responce = await fetch(`movie/${movieid}/credits`);
    const cast = responce.cast.map(credit => {
      return {
        id: credit.id,
        character: credit.character,
        name: credit.name,
        profile: credit.profile_path
          ? `https://image.tmdb.org/t/p/w138_and_h175_face/${credit.profile_path}`
          : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg',
      };
    });
    return cast;
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async movieid => {
  try {
    const responce = await fetch(`movie/${movieid}/reviews`, { page: 1 });
    const reviews = responce.results.map(review => {
      return {
        author: review.author,
        content: review.content,
        id: review.id,
      };
    });
    return reviews;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const responce = await fetch('search/movie', {
      page: 1,
      include_adult: false,
      query: query,
    });
    const movies = responce.results.map(movie => {
      return {
        title: movie.title,
        id: movie.id,
        poster:
          'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' +
          movie.poster_path,
      };
    });
    return movies;
  } catch (error) {
    throw error;
  }
};

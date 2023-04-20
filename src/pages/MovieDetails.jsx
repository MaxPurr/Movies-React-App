import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../services/api';
import { Suspense } from 'react';
import {
  ImageWrapper,
  Section,
  Information,
  Title,
  SubTitle,
  Text,
  UserScore,
  AdditionalInformation,
  Link,
  GoBackButton,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieid } = useParams();

  const [title, setTitle] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? null;

  console.log(location);

  useEffect(() => {
    const fetch = async () => {
      try {
        const movieDetails = await getMovieDetails(movieid);
        setPoster(movieDetails.poster);
        setTitle(movieDetails.title);
        setUserScore(movieDetails.userScore);
        setOverview(movieDetails.overview);
        setGenres(movieDetails.genres);
      } catch (error) {}
    };
    fetch();
  }, [movieid]);

  const goBack = ev => navigate(backLinkHref, { replace: true });

  return (
    <>
      {backLinkHref && <GoBackButton onClick={goBack}>Go back</GoBackButton>}
      <Section>
        <ImageWrapper>
          <img src={poster} alt={title} />
        </ImageWrapper>
        <Information>
          <div>
            <Title>{title}</Title>
            <Text>
              User score: <UserScore>{userScore}%</UserScore>
            </Text>
            <SubTitle>Overview</SubTitle>
            <Text>{overview}</Text>
            <SubTitle>Genres</SubTitle>
            <Text>{genres.join(', ')}</Text>
          </div>
          <div>
            <SubTitle>Additional information</SubTitle>
            <AdditionalInformation>
              <li>
                <Link to="cast" state={{ from: backLinkHref }}>
                  <p>Cast</p>
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: backLinkHref }}>
                  <p>Reviews</p>
                </Link>
              </li>
            </AdditionalInformation>
          </div>
        </Information>
      </Section>
      <Suspense feedback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../services/api';
import {
  List,
  ListItem,
  ImageWrapper,
  TextContainer,
  Name,
  Character,
} from './Cast.styled';

const Cast = () => {
  const { movieid } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const cast = await getMovieCast(movieid);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, [movieid]);

  return (
    <List>
      {cast.map(({ id, character, name, profile }) => (
        <ListItem key={id}>
          <ImageWrapper>
            <img width={100} src={profile} alt={name} />
          </ImageWrapper>
          <TextContainer>
            <Name>{name}</Name>
            <Character>{character}</Character>
          </TextContainer>
        </ListItem>
      ))}
    </List>
  );
};
export default Cast;

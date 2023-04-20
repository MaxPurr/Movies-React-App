import {
  List,
  ListItem,
  TextContainer,
  Link,
  ImageWrapper,
} from './MoviesList.styled';

export const MoviesList = ({ movies, from }) => {
  return (
    <List>
      {movies.map(({ title, id, poster }) => (
        <ListItem key={id}>
          <Link to={'/movies/' + id.toString()} state={{ from: from }}>
            <ImageWrapper>
              <img src={poster} alt={title} />
            </ImageWrapper>
            <TextContainer>
              <p>{title}</p>
            </TextContainer>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

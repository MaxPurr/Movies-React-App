import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../services/api';
import { Message } from '../components/Message.styled';
import { List, ListItem, Author, Review } from './Reviews.styled';

const Reviews = () => {
  const { movieid } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const reviews = await getMovieReviews(movieid);
        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, [movieid]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <ListItem key={id}>
              <Author>{author}</Author>
              <Review>{content}</Review>
            </ListItem>
          ))}
        </List>
      ) : (
        <Message>We don't have any reviews for this movie.</Message>
      )}
    </div>
  );
};
export default Reviews;

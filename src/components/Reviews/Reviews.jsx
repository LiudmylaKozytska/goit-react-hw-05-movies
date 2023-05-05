import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ReviewsList, ReviewsText } from './ReviewsStyle';

const API_KEY = '897e0a2614d8e23c2dbd931fea606526';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      try {
        const response = await (
          await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
          )
        ).data.results;
        const data = response.map(({ id, content }) => ({
          id,
          content,
        }));
        setReview(data);
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
  }, []);

  return (
    <ReviewsList>
      {!review.length ? (
        <ReviewsText>Opps...there is no reviews</ReviewsText>
      ) : (
        review.map(({ id, content }) => {
          return (
            <li key={id}>
              <ReviewsText>{content}</ReviewsText>
            </li>
          );
        })
      )}
    </ReviewsList>
  );
};

export default Reviews;

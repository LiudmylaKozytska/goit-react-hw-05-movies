import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import anonimImage from 'image/anonim_image.jpg';
import { MovieSpanText } from 'pages/MovieDetails/MovieDetailsStyle';
import { PopMovieImage, PopMovieItem } from 'pages/Home/HomeStyle';
import {
  CastList,
  CastDescription,
  CastCharacter,
  CastListContainer,
} from './CastStyle';
import { ReviewsAlert } from 'components/Reviews/ReviewsStyle';

const API_KEY = '897e0a2614d8e23c2dbd931fea606526';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await (
          await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
          )
        ).data.cast;
        const data = response.map(
          ({ cast_id, character, name, profile_path }) => ({
            id: cast_id,
            name,
            profile_path,
            character,
          })
        );
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {cast !== null && cast.length !== 0 ? (
        <CastListContainer>
          <CastList>
            {cast.map(({ id, character, name, profile_path }) => (
              <PopMovieItem key={id}>
                <PopMovieImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : anonimImage
                  }
                  alt={name}
                />
                <CastDescription>
                  <MovieSpanText>{name}</MovieSpanText>
                  <CastCharacter>{character}</CastCharacter>
                </CastDescription>
              </PopMovieItem>
            ))}
          </CastList>
        </CastListContainer>
      ) : (
        <ReviewsAlert>
          Sorry, but we don't have a list of cast for this movie.
        </ReviewsAlert>
      )}
    </>
  );
};

export default Cast;

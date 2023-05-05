import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  MovieDescription,
  MovieSpanText,
} from 'pages/MovieDetails/MovieDetailsStyle';
import {
  PopMovieImage,
  PopMovieItem,
  PopMoviesList,
} from 'pages/Home/HomeStyle';
import {
  CastList,
  CastDescription,
  CastCharacter,
  CastListContainer,
} from './CastStyle';

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
        const data = response.map(({ id, character, name, profile_path }) => ({
          id,
          name,
          image: `https://image.tmdb.org/t/p/w500${profile_path}`,
          character,
        }));
        console.log(response);

        setCast(data);
        console.log(data);
        console.log(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, []);

  return (
    <>
      {cast !== null && cast.length !== 0 ? (
        <CastListContainer>
          <CastList>
            {cast.map(({ id, character, name, image }) => (
              <PopMovieItem key={id}>
                <PopMovieImage src={image} alt={name} />
                <CastDescription>
                  <MovieSpanText>{name}</MovieSpanText>
                  <CastCharacter>{character}</CastCharacter>
                </CastDescription>
              </PopMovieItem>
            ))}
          </CastList>
        </CastListContainer>
      ) : (
        <MovieSpanText>
          Sorry, but we don't have a list of cast for this movie.
        </MovieSpanText>
      )}
    </>
  );
};

export default Cast;

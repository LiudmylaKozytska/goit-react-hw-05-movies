import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Input, Form } from './MoviesStyle';
import {
  Container,
  Title,
  PopMoviesList,
  PopMovieItem,
  PopMovieImage,
  PopMovieTitle,
} from 'pages/Home/HomeStyle';

const API_KEY = '897e0a2614d8e23c2dbd931fea606526';

const Movies = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }

    const getQueryMovie = async () => {
      try {
        const response = await (
          await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
          )
        ).data.results;
        const data = response.map(
          ({ id, title, original_title, poster_path }) => ({
            id,
            title: title || original_title,
            image: `https://image.tmdb.org/t/p/w500${poster_path}`,
          })
        );
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getQueryMovie();
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();

    const query = event.target[0].value.trim();
    setSearchParams({ query });
  };

  return (
    <Container>
      <Form onSubmit={e => handleSubmit(e)}>
        <label>
          <Input type="text" placeholder="Search movie by name..."></Input>
        </label>
      </Form>
      {movie ? (
        <PopMoviesList>
          {movie.map(({ id, title, image }) => {
            return (
              <PopMovieItem key={id}>
                <Link to={`movies/${id}`}>
                  <PopMovieImage src={image} alt={title} />
                  <PopMovieTitle>{title}</PopMovieTitle>
                </Link>
              </PopMovieItem>
            );
          })}
        </PopMoviesList>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Movies;

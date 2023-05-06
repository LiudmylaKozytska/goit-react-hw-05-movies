import axios from 'axios';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { TfiSearch } from 'react-icons/tfi';
import anonimImage from 'image/anonim_image.jpg';
import { Input, Form, Button } from './MoviesStyle';
import {
  Container,
  PopMoviesList,
  PopMovieItem,
  PopMovieImage,
  PopMovieTitle,
} from 'pages/Home/HomeStyle';

const API_KEY = '897e0a2614d8e23c2dbd931fea606526';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null) {
      return;
    }

    const getQueryMovie = async () => {
      try {
        const response = await (
          await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
          )
        ).data.results;

        if (response.length === 0) {
          Notiflix.Notify.warning('We have not movies by this title.');
          return;
        }
        const data = response.map(
          ({ id, title, original_title, poster_path }) => ({
            id,
            title: title || original_title,
            poster_path,
          })
        );
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getQueryMovie();
  }, [query, searchParams]);

  const onChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    let value = event.target.elements.search.value;
    setSearchQuery(value);
    setSearchParams({ query: value });
    if (query && query.trim() === '') {
      Notiflix.Notify.warning('Type title of movie.');
      return;
    }
    setSearchQuery('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <TfiSearch />
        </Button>
        <Input
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search movie by name..."
          value={searchQuery}
          onChange={onChange}
        ></Input>
      </Form>
      {movie && (
        <PopMoviesList>
          {movie.map(({ id, title, poster_path }) => {
            return (
              <PopMovieItem key={id}>
                <Link to={`${id}`} state={{ from: location }} key={id}>
                  <PopMovieImage
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : anonimImage
                    }
                    alt={title}
                  />
                  <PopMovieTitle>{title}</PopMovieTitle>
                </Link>
              </PopMovieItem>
            );
          })}
        </PopMoviesList>
      )}
    </Container>
  );
};

export default Movies;

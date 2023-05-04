import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Title,
  PopMoviesList,
  PopMovieItem,
  PopMovieImage,
  PopMovieTitle,
} from './HomeStyle';

const API_KEY = '897e0a2614d8e23c2dbd931fea606526';

const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await (await axios.get(URL)).data.results;
        const data = response.map(
          ({ id, title, original_title, poster_path }) => ({
            id,
            title: title || original_title,
            image: `https://image.tmdb.org/t/p/w500${poster_path}`,
          })
        );
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <PopMoviesList>
        {movies.map(({ id, title, image }) => {
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
    </Container>
  );
};

export default Home;

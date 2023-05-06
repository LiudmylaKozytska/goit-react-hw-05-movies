import axios from 'axios';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { BsArrowLeft, BsBoxArrowInDown } from 'react-icons/bs';
import Notiflix from 'notiflix';
import { Container, Title } from 'pages/Home/HomeStyle';
import {
  MovieContainer,
  MovieDescription,
  MovieIdContainer,
  MovieIdLink,
  MovieImage,
  MovieSpanText,
} from './MovieDetailsStyle';

const API_KEY = '897e0a2614d8e23c2dbd931fea606526';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backPage = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );

        const {
          title,
          original_title,
          vote_average,
          overview,
          genres,
          poster_path,
          release_date,
        } = response.data;

        const movieObj = {
          title: title || original_title,
          score: vote_average,
          overview: overview,
          genres: genres.map(({ name }) => name).join(', '),
          image: `https://image.tmdb.org/t/p/w500${poster_path}`,
          date: release_date.split('-')[0],
        };

        setMovie(movieObj);

        if (response.length === 0) {
          Notiflix.Notify.warning('There are no movies by this title');
        }
      } catch (error) {
        console.log(error);
        Notiflix.Notify.warning('This movie has not details.');
      }
    };
    getMovieById();
  }, [movieId]);

  return (
    <Container>
      {movie && (
        <>
          <MovieIdLink to={backPage.current}>
            <BsArrowLeft />
            <MovieSpanText>Back</MovieSpanText>
          </MovieIdLink>
          <MovieIdContainer>
            <MovieImage src={movie.image} alt={movie.title} />
            <MovieContainer>
              <Title>
                {movie.title} ({movie.date})
              </Title>
              <MovieDescription>
                <MovieSpanText>Score: </MovieSpanText>
                {movie.score}
              </MovieDescription>
              <MovieSpanText>Overview</MovieSpanText>
              <MovieDescription>{movie.overview}</MovieDescription>
              <MovieSpanText>Genres: </MovieSpanText>
              <MovieDescription>{movie.genres}</MovieDescription>
              <ul>
                <MovieSpanText>Additional information </MovieSpanText>
                <li>
                  <MovieIdLink to="cast">
                    <MovieSpanText>
                      Cast <BsBoxArrowInDown />
                    </MovieSpanText>
                  </MovieIdLink>
                </li>
                <li>
                  <MovieIdLink to="reviews">
                    <MovieSpanText>
                      Reviews <BsBoxArrowInDown />
                    </MovieSpanText>
                  </MovieIdLink>
                </li>
              </ul>
            </MovieContainer>
            <Suspense fallback="Loading...">
              <Outlet />
            </Suspense>
          </MovieIdContainer>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;

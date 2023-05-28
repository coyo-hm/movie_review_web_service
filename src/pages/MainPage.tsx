import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useEffect } from 'react';
import { getMoviesAsync } from '../services/MovieService';

const MainPageWrapper = styled.main``;
const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { moviesList } = useAppSelector((state) => state.movie);

  useEffect(() => {
    const getMovie = async () => {
      await dispatch(getMoviesAsync()).unwrap();
    };
    getMovie();
  }, []);

  return <MainPageWrapper></MainPageWrapper>;
};

export default MainPage;

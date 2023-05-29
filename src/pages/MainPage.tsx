import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { getMoviesAsync } from '@services/MovieService';

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

  return (
    <MainPageWrapper>
      <AnimatePresence></AnimatePresence>
    </MainPageWrapper>
  );
};

export default MainPage;

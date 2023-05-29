import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { getMoviesAsync } from '@services/MovieService';
import { makeImagePath } from '@utils/makeImagePath';

const MainPageWrapper = styled.main``;

const Banner = styled.article`
  width: 100vw;
  position: relative;
  max-height: calc(100vh - ${(props) => props.theme.layout.headerHeight});
  overflow: hidden;

  img {
    width: 100%;
    //max-height: calc(100vh - ${(props) => props.theme.layout.headerHeight});
    overflow: hidden;
  }
`;

const BannerContent = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px;
  gap: 20px;
`;

const BannerTitle = styled.header`
  font-size: 68px;
  color: white;
  mix-blend-mode: difference;
`;

const BannerOverview = styled.p`
  font-size: 20px;
  width: 75%;
  color: rgba(255, 255, 255, 0.4);
  mix-blend-mode: difference;
  line-height: 1.5rem;
  margin-bottom: 20px;
  word-break: keep-all;
  white-space: pre-wrap;
`;

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
      <Banner>
        <img src={makeImagePath(moviesList[0]?.backdrop_path || '')} width={'100%'} />
        <BannerContent>
          <BannerTitle>{moviesList[0]?.title}</BannerTitle>
          <BannerOverview>{moviesList[0]?.overview}</BannerOverview>
        </BannerContent>
      </Banner>
      <AnimatePresence></AnimatePresence>
    </MainPageWrapper>
  );
};

export default MainPage;

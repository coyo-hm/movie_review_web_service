import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import MainHeader from '@components/MainHeader';

const MainLayoutWrapper = styled.main`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas: 'header' 'main';
  grid-template-rows: ${(props) => props.theme.layout.headerHeight} 1fr;
`;

const MainContentWrapper = styled.main`
  grid-area: main;
  overflow: auto;
`;

const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <MainHeader />
      {/*<MainSidebar />*/}
      <MainContentWrapper>
        <Outlet />
      </MainContentWrapper>
    </MainLayoutWrapper>
  );
};

export default MainLayout;

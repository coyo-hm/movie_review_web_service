import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import MainHeader from '../components/common/MainHeader';
import MainSidebar from '../components/common/MainSidebar';

const MainLayoutWrapper = styled.main`
  background-color: beige;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas: 'header header' 'sidebar main';
  grid-template-rows: ${(props) => props.theme.layout.headerHeight} 1fr;
  grid-template-columns: ${(props) => props.theme.layout.sidebarWidth} 1fr;
`;

const MainContentWrapper = styled.main`
  grid-area: main;
  overflow: auto;
`;

const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <MainHeader />
      <MainSidebar />
      <MainContentWrapper>
        <Outlet />
      </MainContentWrapper>
    </MainLayoutWrapper>
  );
};

export default MainLayout;

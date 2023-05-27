import styled from '@emotion/styled';

const MainHeaderWrapper = styled.header`
  height: ${(props) => props.theme.layout.headerHeight};
  width: 100vw;
  grid-area: header;
  background-color: white;
`;

const MainHeader = () => {
  return <MainHeaderWrapper></MainHeaderWrapper>;
};

export default MainHeader;

import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation, useScroll } from 'framer-motion';
import styled from '@emotion/styled';
import SITE_URL from '../../constants/site_url';
import useInput from '../../hooks/useInput';
import { ReactComponent as IconProfile } from '../../assets/images/icon_profile.svg';
import { ReactComponent as IconSearch } from '../../assets/images/icon_search.svg';
import { ReactComponent as IconBrand } from '../../assets/images/logo_brand.svg';

const MainHeaderWrapper = styled(motion.header)`
  height: ${(props) => props.theme.layout.headerHeight};
  width: 100vw;
  grid-area: header;
  background-color: rgba(255, 255, 255);
  padding: 15px 30px;
  display: grid;
  gap: 10px;
  grid-template-columns: 35px 1fr 20px;
  justify-items: flex-end;
  align-items: center;
  overflow: hidden;
`;

const LogoBtn = styled(Link)`
  height: 30px;
  color: #003678;
  transition: 0.5ms;

  &:hover {
    color: ${(props) => props.theme.colors.lightBlue};
  }

  svg {
    height: 100%;
    width: auto;
  }
`;

const SearchBar = styled.form`
  overflow: hidden;
  position: relative;
  width: 100%;
  text-align: end;
`;

const SearchInput = styled(motion.input)`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 5px 10px;
  color: black;
  width: 170px;
  font-size: 12px;
  font-weight: 200;
`;

const SearchBtn = styled(motion.button)`
  height: 25px;
  width: auto;
  color: ${(props) => props.theme.colors.logoBlue};
  position: absolute;

  svg {
    height: 25px;
    width: auto;
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;

const ProfileBtn = styled.button`
  height: 25px;
  color: ${(props) => props.theme.colors.logoBlue};

  svg {
    height: 100%;
    transition: 0.3ms;
    width: auto;
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;
const navVariants = {
  top: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  scroll: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0px 4px 4px 0px #0000001A',
  },
};
const MainHeader = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, onChangeKeyword] = useInput('');

  useEffect(() => {
    scrollY.on('change', () => {
      if (scrollY.get() > 80) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('top');
      }
    });
  }, [scrollY, navAnimation]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.length >= 2) {
      navigate(SITE_URL.SEARCH + `?keyword=${keyword}`);
    }
  };

  return (
    <MainHeaderWrapper initial={'top'} animate={navAnimation} variants={navVariants}>
      <LogoBtn to={SITE_URL.MAIN}>
        <IconBrand />
      </LogoBtn>
      <SearchBar onSubmit={handleSearch}>
        <SearchBtn
          animate={{ x: isSearchOpen ? -35 : 140 }}
          transition={{ type: 'linear' }}
          onClick={() => setIsSearchOpen((prev) => !prev)}
          type={'button'}
        >
          <IconSearch />
        </SearchBtn>
        <SearchInput
          value={keyword}
          onChange={onChangeKeyword}
          animate={{ x: isSearchOpen ? 0 : 200 }}
          transition={{ type: 'linear' }}
          type={'search'}
        />
      </SearchBar>
      <ProfileBtn>
        <IconProfile />
      </ProfileBtn>
    </MainHeaderWrapper>
  );
};

export default MainHeader;

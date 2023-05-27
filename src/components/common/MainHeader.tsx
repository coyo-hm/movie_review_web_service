import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ReactComponent as IconProfile } from '../../assets/images/icon_profile.svg';
import { ReactComponent as IconSearch } from '../../assets/images/icon_search.svg';
import IconLogo from '../../assets/images/logo_icon.png';
import useInput from '../../hooks/useInput';
import SITE_URL from '../../constants/site_url';

const MainHeaderWrapper = styled.header`
  height: ${(props) => props.theme.layout.headerHeight};
  width: 100vw;
  grid-area: header;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 15px 30px;
  display: grid;
  gap: 10px;
  grid-template-columns: 127px 1fr 20px;
  justify-items: flex-end;
  align-items: center;
  overflow: hidden;
`;

const LogoBtn = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.colors.logoBlue};
  font-size: 36px;
  transition: 0.3ms;

  img {
    height: 40px;
    width: auto;
    color: inherit;
  }

  &:hover {
    color: #003678;
  }
`;

const SearchBar = styled.form`
  overflow: hidden;
  position: relative;
  width: 100%;
  text-align: end;
`;

const SearchInput = styled(motion.input)`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  padding: 5px 10px;
  color: white;
  width: 170px;
  font-size: 12px;
  font-weight: 200;
`;

const SearchBtn = styled(motion.button)`
  height: 25px;
  width: auto;
  color: white;
  position: absolute;

  svg {
    height: 25px;
    width: auto;
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.colors.logoBlue};
  }
`;

const ProfileBtn = styled.button`
  height: 25px;
  color: white;

  svg {
    height: 100%;
    transition: 0.3ms;
    width: auto;
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.colors.logoBlue};
  }
`;

const MainHeader = () => {
  const navigate = useNavigate();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const keyword = useInput('');

  const handleSearch = () => {
    if (keyword.value?.length >= 2) {
      navigate(SITE_URL.SEARCH + `?keyword=${keyword.value}`);
    }
  };

  return (
    <MainHeaderWrapper>
      <LogoBtn>
        <img src={IconLogo} height={40} alt={'logo-button'} />
        <span>AFIL</span>
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
          {...keyword}
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

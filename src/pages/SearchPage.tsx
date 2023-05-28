import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const keyword = searchParam.get('keyword');
  console.log(keyword);
  return <></>;
};

export default SearchPage;

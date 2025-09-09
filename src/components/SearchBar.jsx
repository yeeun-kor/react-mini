import useDebounce from '@/hook/useDebounce';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //검색어 관리
  const [inputValue, setInputValue] = useState('');
  //useDebounce로 검색어 업데이트
  const debouncedVal = useDebounce(inputValue, 500);

  //검색어 변경시 navigate로 이동
  useEffect(() => {
    if (debouncedVal?.trim()) {
      navigate(`/search?query=${debouncedVal}`);
    }
  }, [debouncedVal]);

  useEffect(() => {
    setInputValue('');
  }, [location.pathname]);
  return (
    <div className="w-full flex-1 border-b">
      {' '}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="영화검색하기"
        className="focus:outline-none"
      />
    </div>
  );
};

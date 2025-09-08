import { debounce } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  //상태관리
  //검색어 입력
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [debouncedVal, setDebouncedVal] = useState('');
  console.log(inputValue);

  //디바운스된 값만 inputValue로 세팅하기
  //디바운스 함수 생성
  //3초동안 추가 호출이 없으면, 마지막으로 전달된 값으로 함수값 실행
  const debouncedSendRequest = useMemo(() => {
    return debounce((inputValue) => setDebouncedVal(inputValue), 1000);
  }, []);

  //이렇게해서 상태변화된 값을 navigate로 보내기
  const onChange = (e) => {
    const val = e.target.value;
    setInputValue(val); //입력한 값 화면에 반영
    debouncedSendRequest(val); //입력된 값 디바운스로 보내기
  };

  //검색어 입력값 API로 보내기
  useEffect(() => {
    if (debouncedVal.trim()) {
      navigate(`/search?query=${debouncedVal}`);
    }
  }, [debouncedVal]);

  useEffect(() => {
    setDebouncedVal('');
    setInputValue('');
  }, [location.pathname]);

  return (
    <div className="w-full flex-1 border-b">
      {' '}
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="영화검색하기"
      />
    </div>
  );
};

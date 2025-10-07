import { useEffect, useState } from 'react';
//검색어 입력 useDebounce
const useDebounce = (value, delay = 500) => {
  const [debouncedVal, setDebouncedVal] = useState(value);
  useEffect(() => {
    //debounce 구현
    const handler = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    //cleanup
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedVal;
};

export default useDebounce;

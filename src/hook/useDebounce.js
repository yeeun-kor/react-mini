import { useEffect, useState } from 'react';

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

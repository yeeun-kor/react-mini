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

/*
1. `useState` 디바운스하여 반환 값 상태 관리 진행
    1. 초기 state값은 첫번째 인자로 들어온 val값으로 세팅함
2. 이제 `useEffect` 로 인자값이 새로 바뀔때 마다, `setDebouncedVal` 를 해주어야 한다.
    1. 이때, `handler` 가 필요한 이유는, 사용자의 검색어 입력이 `n`초 지나고 나서 값으로 세팅해야하기 때문
    2. 그래서 `setTimeout` 으로 일정 시간이 지나고 `setDebouncedVal`에 val 값을 세팅하기
    3. 예를들어, `val` 값은 자음 모음 다 따로 들어오게 된다 ( ㄴㅗㅂㅏㄷㅣ 이렇게 )

        → 이걸 `debounce` 를 통하여 하나의 검색어로 저장해서 관리해야함

3. `useEffect` 에서 handler로 debounce 기능 구현했으면, 클린업 함수로 사용해서 불필요한 랜더링 (setTimeout) 방지
4.  `useEffect` 의존성 배열은 외부에서 입력된 값과 시간초이다.
5. 디바운스 된 값인 `debouncedVal` 리턴하면 끝 !
 */

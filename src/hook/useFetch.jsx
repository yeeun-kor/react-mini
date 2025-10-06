import { api } from '@/data/api';
import { useEffect, useState } from 'react';

//! URL에 값에 따른 데이터 통신 리액트 훅 생성
//- 파라미터params : TMDB에 전달하는 옵션들 lanuage,region 을 설정 할 수 있음.
export const useFetch = (url, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //- 비동기처리 -> async/await으로 axios인스턴스 호출하면서 인스턴스의 내장 메서드인 get() 사용
    //- 응답값에 따른 200,400,500에러 페이지 추가
    const fetchData = async () => {
      try {
        const res = await api.get(url, params);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setError(err);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

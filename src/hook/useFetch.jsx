import { API_KEY } from '@/data/movieApi';
import { useEffect, useState } from 'react';

//전체 영화 데이터 정보들 갖고 오는 로직.
export const useFetch = (url) => {
  const [data, setData] = useState([]);
  //비동기 처리 응답요청이 제대로 되었는지 상태플래그 설정
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        };
        const res = await fetch(url, options);
        const json = await res.json();
        console.log(json);
        setData(json);
        setLoading(false); //로딩완료되었는지
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

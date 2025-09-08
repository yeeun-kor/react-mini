import { API_KEY, API_URL, SEARCH_URL } from '@/data/movieApi';
import { useEffect, useState } from 'react';

export const useSearch = (val) => {
  const [data, setData] = useState([]);
  //비동기 처리 응답요청이 제대로 되었는지 상태플래그 설정
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //검색어가 비어있으면 전체 리스트 호출
    const fetchUrl = val
      ? `${SEARCH_URL}${encodeURIComponent(val)}&language=ko`
      : `${API_URL}`;
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        };
        const res = await fetch(fetchUrl, options);
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
  }, [val]);
  return { data, loading, error };
};

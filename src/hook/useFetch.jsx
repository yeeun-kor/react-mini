import { api } from '@/data/api';
import { useEffect, useState } from 'react';

//! URL에 값에 따른 데이터 통신 리액트 훅 생성
export const useFetch = (url, params) => {
  //응답받은 데이터를 상태값으로 관리 할 것.
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

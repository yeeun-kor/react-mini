import { API_KEY } from '@/data/movieApi';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);

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
        //results사용 안하고!!! 그냥 객체 전체 받아와라 !! 재사용성 높이게
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return data;
};

import axios from 'axios';

//포스터 이미지 베이스 주소
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

//TMDB 환경변수 토큰키
export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

//! 앤드포인트
export const ENDPOINTS = {
  nowPlaying: '/movie/now_playing',
  upcoming: '/movie/upcoming',
  detail: (id) => `/movie/${id}`, // 동적 URL
  search: '/search/movie',
};

//! AXIOS.create 인스턴스 생성
//- TMDB에 직접 api정보 요청하는 로직
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
  },
});

//- axios interceptor를 설정하여 상태코드 출력시키기
//- 상태코드200이면 : 200: /movie/now_playing
//- 상태코드에러이면 :undefined : /movie/now_playing  Network Error
api.interceptors.response.use(
  (res) => {
    console.log(`${[res.status]}: ${res.config.url}`);
    return res;
  },
  (err) => {
    console.log(`${err.response?.status} : ${err.config?.url}`);
    return Promise.reject(err);
  },
);

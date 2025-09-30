import axios from 'axios';

//포스터 이미지 베이스 주소
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

//환경변수 토큰키
export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

//! 앤드포인트
export const ENDPOINTS = {
  nowPlaying: '/movie/now_playing',
  upcoming: '/movie/upcoming',
  detail: (id) => `/movie/${id}`, // 동적 URL
  search: '/search/movie',
};

//! AXIOS.create
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
  },
});

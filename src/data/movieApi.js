//포스터 이미지 베이스 주소
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

//환경변수 토큰키
export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

//영화리스트 api
export const API_URL =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=3&sort_by=popularity.desc';

//영화디테일 api
export const DETAIL_URL = 'https://api.themoviedb.org/3/movie/';

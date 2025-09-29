import axios from 'axios';

//! AXIOS.create
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
  },
});

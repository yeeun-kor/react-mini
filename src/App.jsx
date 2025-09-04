import { Link } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
// 캐러셀 라이브러리
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFetch } from './hook/useFetch';
//TODOS data:RTK로 관리하기

// export const BASE_IMG_URL = import.meta.env.VITE_BASE_IMG_URL;
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
//TMDB 사용
export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=ko&page=1';

export function App() {
  const movies = useFetch(API_URL);
  console.log(movies.results);
  return (
    <>
      <h1 className="bg-amber-300 p-3 text-center text-3xl">이달의 영화</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        className="max-w-[1080px]"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {movies.results &&
          movies.results.map((movie) => (
            <SwiperSlide key={movie.id} className="border-2 px-4">
              <Link to={`/details/${movie.id}`}>
                <MovieCard movie={movie}></MovieCard>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
      <h1 className="bg-red-300 p-3 text-center text-3xl">금주 인기 영화</h1>
      <main className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {movies.results &&
          movies.results
            .filter((movie) => movie.adult === false)
            .map((movie) => (
              <Link key={movie.id} to={`/details/${movie.id}`}>
                <MovieCard movie={movie}></MovieCard>
              </Link>
            ))}
      </main>
    </>
  );
}

export default App;

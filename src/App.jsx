import { Link } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
// 캐러셀 라이브러리
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { API_URL } from './data/movieApi';
import { useFetch } from './hook/useFetch';

export function App() {
  const movies = useFetch(API_URL);
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
            <SwiperSlide key={movie.id} className="mb-5 px-4">
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

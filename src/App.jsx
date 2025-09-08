import { Link } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
// 캐러셀 라이브러리
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { API_URL } from './data/movieApi';
import { useFetch } from './hook/useFetch';
import SkeletonMovieList from './skeletons/movieList';

export function App() {
  const { data: movies, loading, error } = useFetch(API_URL);

  return (
    <>
      <h1 className="bg-amber-300 p-3 text-center text-3xl">이달의 영화</h1>
      {/* 스켈레톤 */}
      {loading ? (
        <>
          <Swiper
            modules={[Navigation, Pagination]}
            // spaceBetween={10}
            // slidesPerView={5}
            navigation
            className="max-w-[1080px]"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {Array.from({ length: 3 }).map((_, idx) => (
              <SwiperSlide key={'SkeletonSlide' + idx} className="mb-5 px-4">
                <SkeletonMovieList />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : error ? (
        <h2>에러발생</h2>
      ) : (
        <>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={5}
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
        </>
      )}
      <h1 className="bg-red-300 p-3 text-center text-3xl">금주 인기 영화</h1>

      {loading ? (
        <main className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {Array.from({ length: 20 }).map((_, idx) => (
            <SkeletonMovieList />
          ))}
        </main>
      ) : (
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
      )}
    </>
  );
}

export default App;

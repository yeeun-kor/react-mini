import MovieCard from '@/components/MovieCard';
import { API_URL } from '@/data/movieApi';
import { useFetch } from '@/hook/useFetch';
// Swiper import 수정
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper 스타일 import 추가
import SkeletonMovieList from '@/skeletons/SkeletonMovieList';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Main() {
  const { data: movies, loading, error } = useFetch(API_URL);

  return (
    <main>
      <h1 className="mx-auto my-12 w-fit rounded-xl bg-indigo-400 px-6 py-3 text-center text-3xl font-bold text-white shadow-md dark:bg-indigo-500">
        🍿이달의 영화
      </h1>
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
            {Array.from({
              length: movies.results ? movies.results.length : 10,
            }).map((_, idx) => (
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
      <h1 className="mx-auto my-12 w-fit rounded-xl bg-amber-400 px-6 py-3 text-center text-3xl font-bold text-white shadow-md dark:bg-amber-500">
        🎬 금주 인기 영화
      </h1>

      {loading ? (
        <div className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 shadow-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 dark:shadow-cyan-500/50">
          {Array.from({
            length: movies.results ? movies.reusults.length : 20,
          }).map((_, idx) => (
            <SkeletonMovieList />
          ))}
        </div>
      ) : (
        <div className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {movies.results &&
            movies.results
              .filter((movie) => movie.adult === false)
              .map((movie) => (
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <MovieCard movie={movie}></MovieCard>
                </Link>
              ))}
        </div>
      )}
    </main>
  );
}

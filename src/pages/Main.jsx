import { ENDPOINTS } from '@/data/movieApi';
import { useFetch } from '@/hook/useFetch';
// Swiper import 수정
// Swiper 스타일 import 추가

import MovieCard from '@/components/MovieCard';
import SwiperSection from '@/components/SwiperSection';
import SwitchCase from '@/components/SwitchCase';
import SkeletonMovieList from '@/skeletons/SkeletonMovieList';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Main() {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(ENDPOINTS.nowPlaying, {
    params: {
      language: 'ko',
      region: 'kr',
    },
  });
  const {
    data: upcomingMovies,
    upcomingLoading,
    upcomingError,
  } = useFetch(ENDPOINTS.upcoming, {
    params: {
      language: 'ko',
      region: 'kr',
    },
  });

  return (
    <main>
      {/* 새로운 영화 리스트  */}
      <h1 className="mx-auto my-12 w-fit rounded-xl bg-indigo-400 px-6 py-3 text-center text-3xl font-bold text-white shadow-md dark:bg-indigo-500">
        🎞️ UPCOMING MOVIES 🎞️
      </h1>
      <SwiperSection
        movies={upcomingMovies}
        loading={upcomingLoading}
        error={upcomingError}
      ></SwiperSection>

      {/* 인기 영화 리스트 */}
      <h1 className="mx-auto my-12 w-fit rounded-xl bg-amber-400 px-6 py-3 text-center text-3xl font-bold text-white shadow-md dark:bg-amber-500">
        🔥 HOT MOVIES 🔥{' '}
      </h1>
      <SwitchCase
        condition={loading}
        fallback={
          <div className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 shadow-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 dark:shadow-cyan-500/50">
            {Array.from({ length: 20 }).map((_, idx) => (
              <SkeletonMovieList key={idx} />
            ))}
          </div>
        }
      >
        <div className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {movies.results &&
            movies.results
              .filter((movie) => movie.adult === false)
              .map((movie) => (
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
              ))}
        </div>
      </SwitchCase>
    </main>
  );
}

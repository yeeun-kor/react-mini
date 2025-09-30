import SkeletonMovieList from '@/skeletons/SkeletonMovieList';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';
import SwitchCase from './SwitchCase';

export default function SwiperSection({ movies, loading }) {
  return (
    <Swiper
      lazy={true}
      slidesPerView={5}
      spaceBetween={10}
      loop={true}
      navigation={true}
      className="mx-10 max-w-[1024px] px-5 py-3"
      modules={[Pagination, Navigation]}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 5 },
        640: { slidesPerView: 2, spaceBetween: 5 },
        768: { slidesPerView: 3, spaceBetween: 5 },
        1024: { slidesPerView: 5, spaceBetween: 5 },
      }}
    >
      <SwitchCase
        condition={loading}
        fallback={Array.from({
          length: movies.results ? movies.results.length : 20,
        }).map((_, idx) => (
          <SwiperSlide key={`skeleton-${idx}`} className="px-5 py-10">
            <SkeletonMovieList />
          </SwiperSlide>
        ))}
      >
        {movies.results?.map((movie) => (
          <SwiperSlide key={movie.id} className="px-5 py-10">
            <Link to={`/details/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
      </SwitchCase>
    </Swiper>
  );
}

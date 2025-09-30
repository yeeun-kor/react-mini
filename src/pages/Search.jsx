import MovieCard from '@/components/MovieCard';
import { ENDPOINTS } from '@/data/movieApi';
import { useFetch } from '@/hook/useFetch';
import { Link, useSearchParams } from 'react-router-dom';

export const Search = () => {
  //검색어 전체
  const [searchParams] = useSearchParams();
  const param = searchParams.get('query');
  const query = param || '';

  // 정규식 패턴으로 검색어 변환
  console.log(`param값 : ${param}`);

  const { data: movies, loading, error } = useFetch(ENDPOINTS.search);

  // param값과 데이터값이 일치하는지 필터링
  const filteredMovies = movies?.results?.filter((movie) => {
    const movieTitle = movie.title.replace(/\s/g, '').toLowerCase();
    const searchQuery = (param || '').replace(/\s/g, '').toLowerCase();
    return movieTitle.includes(searchQuery);
  });
  console.log(filteredMovies);

  return (
    <>
      <h2 className="py-3 text-center text-2xl">검색 결과 : {param}</h2>
      <div className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {filteredMovies?.map((movie) => (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

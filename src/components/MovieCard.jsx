import { BASE_IMG_URL } from '@/data/movieApi';

export default function MovieCard({ movie }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-xl dark:bg-gray-800">
      <img
        src={`${BASE_IMG_URL}${movie.poster_path}`}
        alt="posterImg"
        className="aspect-[2/3] w-full rounded-t-xl object-cover group-hover:bg-black"
      />
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
      {/* 텍스트 */}
      <div className="absolute bottom-0 hidden flex-col gap-1 p-3 text-white group-hover:flex md:text-base">
        <h4 className="text-md">{movie.title}</h4>
        <p className="inline-block w-fit rounded-md text-xs font-medium">
          평점 ⭐️ {movie.vote_average}
        </p>
        <p className="inline-block w-fit rounded-md text-xs font-medium">
          개봉일자 {movie.release_date}
        </p>
      </div>
    </div>
  );
}

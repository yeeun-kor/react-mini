import { BASE_IMG_URL } from '@/data/movieApi';

export default function MovieCard({ movie }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-xl dark:bg-gray-800">
      <img
        src={`${BASE_IMG_URL}${movie.poster_path}`}
        alt="posterImg"
        className="aspect-[2/3] w-full rounded-t-xl object-cover"
      />
      <div className="flex flex-col gap-1 p-3">
        <h1 className="truncate text-lg font-semibold text-gray-900 dark:text-white">
          제목 {movie.title}
        </h1>
        <h3 className="inline-block w-fit rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          평점 ⭐️ {movie.vote_average}
        </h3>
      </div>
    </div>
  );
}

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
export default function MovieCard({ movie }) {
  return (
    <div className="my-2 flex h-full flex-col gap-2 overflow-hidden rounded-lg border border-gray-400 shadow-lg">
      <img
        src={`${BASE_IMG_URL}${movie.backdrop_path}`}
        alt="posterImg"
        className="aspect-[2/3] object-cover"
      />
      <div className="p-2">
        <h1 className="truncate font-bold">제목 {movie.title}</h1>
        <h3 className="text-gray-600">평점 {movie.vote_average}</h3>
      </div>
    </div>
  );
}

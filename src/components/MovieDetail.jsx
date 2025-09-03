import { BASE_IMG_URL } from '@/App';

export default function MovieDetail({ detail }) {
  return (
    <div className="grid grid-cols-8 grid-rows-5 gap-5 p-3">
      <img
        src={`${BASE_IMG_URL}${detail.backdrop_path}`}
        alt="posterImg"
        className="col-span-4 row-span-5 aspect-[2/3] object-cover"
      />

      <h1 className="col-span-3 row-span-1 flex items-center justify-center truncate bg-amber-300 p-4 text-center text-2xl font-bold">
        제목 {detail.title}
      </h1>
      <h3 className="col-span-1 row-span-1 flex items-center justify-center bg-green-300 text-lg text-gray-600">
        평점
        {detail.vote_average}
      </h3>
      <div className="col-span-4 row-span-1 flex items-center justify-around bg-indigo-300 p-3">
        장르{' '}
        {detail.genres.map((itm) => (
          <p key={itm.id} className="rounded-3xl border px-3">
            {itm.name}
          </p>
        ))}
      </div>
      <div className="col-span-4 row-span-3 bg-red-300 p-3">
        줄거리 : {detail.overview}
      </div>
    </div>
  );
}

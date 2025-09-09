import { BASE_IMG_URL, DETAIL_URL } from '@/data/movieApi';
import { useFetch } from '@/hook/useFetch';
import { SkeletonMovieDetail } from '@/skeletons/movieDetail';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  //객체로 id값 받아오기
  const { id } = useParams();
  console.log(id);

  const {
    data: detail,
    loading,
    error,
  } = useFetch(`${DETAIL_URL}${id}?language=ko`);

  return (
    <>
      {loading ? (
        <SkeletonMovieDetail />
      ) : (
        <div className="mx-auto grid max-w-[1080px] grid-cols-8 grid-rows-5 gap-3 p-5">
          <img
            src={`${BASE_IMG_URL}${detail.poster_path}`}
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
            {detail.genres?.map((itm) => (
              <p key={itm.id} className="rounded-3xl border px-3">
                {itm.name}
              </p>
            ))}
          </div>
          <div className="col-span-4 row-span-3 bg-red-300 p-3">
            줄거리 : {detail.overview}
          </div>
        </div>
      )}
    </>
  );
}

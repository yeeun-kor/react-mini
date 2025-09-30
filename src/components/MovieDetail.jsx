import { BASE_IMG_URL, ENDPOINTS } from '@/data/movieApi';
import { useFetch } from '@/hook/useFetch';
import { SkeletonMovieDetail } from '@/skeletons/SkeletonMovieDetail';

import { useParams } from 'react-router-dom';
import SwitchCase from './SwitchCase';
export default function MovieDetail() {
  //객체로 id값 받아오기
  const { id } = useParams();
  console.log(id);

  const {
    data: detail,
    loading,
    error,
  } = useFetch(ENDPOINTS.detail(`${id}`), {
    params: {
      language: 'ko',
      region: 'kr',
    },
  });

  return (
    <>
      <SwitchCase condition={loading} fallback={<SkeletonMovieDetail />}>
        <div
          className="relative mx-10 my-10 flex max-w-[1080px] flex-col gap-6 overflow-hidden rounded-xl p-5 md:flex-row"
          style={{
            backgroundImage: `url(${BASE_IMG_URL}${detail.backdrop_path || detail.poster_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm dark:bg-black/70"></div>
          <div className="relative z-10 flex w-full flex-col gap-6 md:flex-row">
            <img
              src={`${BASE_IMG_URL}${detail.poster_path}`}
              alt="posterImg"
              className="w-full max-w-sm rounded-xl object-cover shadow-md"
            />
            <div className="flex flex-1 flex-col gap-4">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                {detail.title}
              </h1>
              <div className="inline-block w-fit rounded-lg bg-yellow-400 px-3 py-1 text-sm font-semibold text-white shadow-sm">
                평점 {detail.vote_average}
              </div>
              <div className="flex cursor-pointer flex-wrap gap-2">
                {detail.genres?.map((itm) => (
                  <p
                    key={itm.id}
                    className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {itm.name}
                  </p>
                ))}
              </div>
              <div className="rounded-lg bg-gray-100 p-4 leading-relaxed text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {detail.overview}
              </div>
            </div>
          </div>
        </div>
      </SwitchCase>
    </>
  );
}

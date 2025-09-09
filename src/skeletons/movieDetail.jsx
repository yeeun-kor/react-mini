export const SkeletonMovieDetail = () => {
  return (
    <div className="mx-auto grid max-w-[1080px] animate-pulse grid-cols-8 grid-rows-5 gap-3 p-5">
      {/* 이미지 자리 */}
      <div className="col-span-4 row-span-5 aspect-[2/3] bg-gray-300"></div>

      {/* 텍스트 자리 */}
      {/* Title placeholder */}
      <div className="col-span-3 row-span-1 flex h-14 items-center justify-center rounded bg-gray-300" />

      {/* Rating placeholder */}
      <div className="col-span-1 row-span-1 flex h-14 items-center justify-center rounded bg-gray-300" />

      {/* Genres placeholder row */}
      <div className="col-span-4 row-span-1 flex items-center gap-2 rounded bg-gray-200/60 p-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-7 w-16 rounded-3xl bg-gray-300" />
        ))}
      </div>

      {/* Overview placeholder (multi-line) */}
      <div className="col-span-4 row-span-3 space-y-2 rounded bg-gray-200/60 p-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-3 w-full rounded bg-gray-300" />
        ))}
      </div>
    </div>
  );
};

const SkeletonMovieList = ({ count = 6 }) => {
  return (
    <div className="my-2 flex h-full animate-pulse flex-col gap-2 overflow-hidden rounded-lg border border-gray-400 shadow-lg">
      {/* 이미지 자리 */}
      <div className="aspect-[2/3] max-h-[240px] w-full bg-gray-300"></div>

      {/* 텍스트 자리 */}
      <div className="space-y-2 p-2">
        <div className="h-4 w-3/4 rounded bg-gray-300"></div> {/* 제목 */}
        <div className="h-3 w-1/2 rounded bg-gray-300"></div> {/* 평점 */}
      </div>
    </div>
  );
};

export default SkeletonMovieList;

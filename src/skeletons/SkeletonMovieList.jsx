const SkeletonMovieList = ({ count = 6 }) => {
  return (
    <div className="relative overflow-hidden rounded-xl animate-pulse">
      <div className="absolute inset-0 bg-gray-200/50 dark:bg-gray-700/50"></div>
      <div className="relative z-10 flex flex-col gap-2">
        <div className="aspect-[2/3] w-full rounded-t-xl bg-gray-300"></div>
        <div className="p-3 flex flex-col gap-1">
          <div className="h-4 w-3/4 rounded bg-gray-300"></div>
          <div className="h-3 w-1/2 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMovieList;

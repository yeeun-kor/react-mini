export const SkeletonMovieDetail = () => {
  return (
    <div className="relative mx-10 my-10 flex max-w-[1080px] animate-pulse flex-col gap-6 overflow-hidden rounded-xl p-5 md:flex-row">
      <div className="absolute inset-0 bg-gray-300/70 dark:bg-gray-700/70"></div>

      <div className="aspect-[2/3] w-full max-w-sm rounded-xl bg-gray-300"></div>
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="h-12 w-1/2 rounded-2xl bg-gray-400"></h1>
        <div className="inline-block h-8 w-20 rounded-lg bg-gray-300"></div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((i) => (
            <div key={i} className="h-8 w-16 rounded-full bg-gray-300"></div>
          ))}
        </div>
        <div className="h-full rounded-lg bg-gray-100 p-4 leading-relaxed text-gray-800 dark:bg-gray-800 dark:text-gray-200"></div>
      </div>
    </div>
  );
};

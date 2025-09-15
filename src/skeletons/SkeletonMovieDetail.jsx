export const SkeletonMovieDetail = () => {
  return (
    <div className="relative my-10 animate-pulse overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gray-200/70 dark:bg-gray-700/70"></div>
      <div className="relative z-10 flex w-full flex-col gap-6 md:flex-row">
        <div className="aspect-[2/3] w-full max-w-sm rounded-xl bg-gray-300"></div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="h-8 w-1/2 rounded bg-gray-300"></div>
          <div className="inline-block h-6 w-20 rounded-lg bg-gray-300"></div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((i) => (
              <div key={i} className="h-6 w-16 rounded-full bg-gray-300"></div>
            ))}
          </div>
          <div className="space-y-2 rounded-lg bg-gray-200/60 p-4 dark:bg-gray-700/60">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-3 w-full rounded bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

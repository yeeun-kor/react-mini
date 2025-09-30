const SkeletonMovieList = ({ count = 6 }) => {
  return (
    <div className="relative animate-pulse overflow-hidden rounded-xl">
      <div className="aspect-[2/3] w-full rounded-t-xl bg-gray-300"></div>
    </div>
  );
};

export default SkeletonMovieList;

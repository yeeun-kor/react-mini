import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="w-full bg-black px-0 py-2 text-white shadow-md md:px-3">
      <div className="m-auto flex max-w-[1080px] flex-col items-center justify-between gap-4 p-4 md:flex-row">
        <h1 className="text-lg font-bold md:text-3xl">
          <Link to={'/'}>🎬 OZ무비</Link>
        </h1>
        <input
          type="text"
          placeholder="영화검색하기"
          className="w-full flex-1 border-b"
        />

        <div className="flex gap-2 md:flex-row">
          <button className="button w-full rounded-full bg-indigo-500 px-3 py-1 text-xs md:text-lg">
            Login
          </button>
          <button className="button w-full rounded-full bg-indigo-500 px-3 py-1 text-xs md:text-lg">
            JoinUs
          </button>
        </div>
      </div>
    </nav>
  );
}

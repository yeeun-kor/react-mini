import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="w-full bg-black px-3 py-2 text-white shadow-md">
      <div className="m-auto flex max-w-[1080px] items-center justify-between gap-4 p-4">
        <h1 className="text-3xl font-bold">
          <Link to={'/'}>🎬 OZ무비</Link>
        </h1>
        <input
          type="text"
          placeholder="영화검색하기"
          className="w-full flex-1 border-b"
        />

        <div className="flex gap-2">
          <button className="button rounded-full bg-indigo-500 px-3 py-1">
            Login
          </button>
          <button className="button rounded-full bg-indigo-500 px-3 py-1">
            JoinUs
          </button>
        </div>
      </div>
    </nav>
  );
}

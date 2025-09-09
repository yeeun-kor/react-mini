import { useAuth } from '@/supabase/authUser';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export default function NavBar() {
  const { user: user.user_metadata, setUser } = useAuth();
  console.log(user);
  return (
    <nav className="w-full bg-black px-0 py-2 text-white shadow-md md:px-3">
      <div className="m-auto flex max-w-[1080px] flex-col items-center justify-between gap-4 p-4 md:flex-row">
        <h1 className="text-lg font-bold md:text-3xl">
          <Link to={'/'} className="flex items-center justify-center">
            <img src="/src/assets/logo.png" alt="" className="h-20" /> OZ무비
          </Link>
        </h1>
        <SearchBar></SearchBar>
        <div className="flex gap-2 md:flex-row">
          {user ? (
            <>
              <span className="text-sm">안녕하세요, {user.name}님</span>
              <button
                onClick={() => setUser(null)}
                className="button rounded-full bg-red-500 px-3 py-1 text-xs md:text-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={'/login'}>
                <button className="button w-full rounded-full bg-indigo-500 px-3 py-1 text-xs md:text-lg">
                  Login
                </button>
              </Link>
              <Link to={'/signup'}>
                <button className="button w-full rounded-full bg-indigo-500 px-3 py-1 text-xs md:text-lg">
                  SignUp
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

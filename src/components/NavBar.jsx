import logo from '@/assets/logo.png';
import { useAuth } from '@/supabase/authUser';
import { useSupabase } from '@/supabase/client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DartkBodeToggle';
import { SearchBar } from './SearchBar';

export default function NavBar() {
  //로그아웃 기능 구현
  const supabase = useSupabase();
  const { user } = useAuth();
  // 유저이름 확인
  const userMetaData = user?.user_metadata;
  console.log(userMetaData);

  //로그아웃 버튼
  const handlerSubmit = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <nav className="w-full bg-black px-0 py-2 text-white shadow-md md:px-3">
      <div className="m-auto flex max-w-[1080px] flex-col items-center justify-between gap-4 p-4 md:flex-row">
        <h1 className="text-lg font-bold md:text-3xl">
          <Link to={'/'} className="flex items-center justify-center">
            <img src={logo} alt="" className="h-20" /> OZ무비
          </Link>
        </h1>
        <SearchBar></SearchBar>
        <DarkModeToggle></DarkModeToggle>
        <div className="flex items-center gap-2 md:flex-row">
          {user ? (
            <>
              <div className="text-sm">
                안녕하세요, {userMetaData.full_name}님
              </div>
              <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <UserCircleIcon
                    aria-hidden="true"
                    className="size-12 text-gray-300"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      관심목록
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={handlerSubmit}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100"
                    >
                      로그아웃
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
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

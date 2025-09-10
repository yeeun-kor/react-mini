//layout에서 화면에 뿌릴 children 컴포넌트 받아와야함

import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

//적용할 네브바 불러오기
export default function Layout() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-screen pt-1 dark:bg-gray-800 dark:text-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

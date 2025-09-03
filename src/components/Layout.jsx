//layout에서 화면에 뿌릴 children 컴포넌트 받아와야함

import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

//적용할 네브바 불러오기
export default function Layout() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="pt-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

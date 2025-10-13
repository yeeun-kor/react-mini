import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// 캐러셀 라이브러리
import React, { Suspense } from 'react';
import 'swiper/css';
import Layout from './components/Layout';
import Loading from './components/Loading';
import MovieDetail from './components/MovieDetail';
import MyPage from './components/MyPage';
import Login from './pages/Login';
import { Search } from './pages/Search';
import { SignUp } from './pages/SignUp';
const Main = React.lazy(() => import('./pages/Main'));

export function App() {
  return (
    <>
      {' '}
      <BrowserRouter>
        <Suspense fallback={<Loading></Loading>}>
          <Routes>
            <Route element={<Layout></Layout>}>
              <Route path="/" element={<Main></Main>}></Route>
              <Route
                path="/details/:id"
                element={<MovieDetail></MovieDetail>}
              ></Route>
              <Route path="/search" element={<Search></Search>}></Route>
              <Route path="/signup" element={<SignUp></SignUp>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/mypage" element={<MyPage></MyPage>}></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

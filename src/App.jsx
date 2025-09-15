import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// 캐러셀 라이브러리
import 'swiper/css';
import Layout from './components/Layout';
import MovieDetail from './components/MovieDetail';
import Login from './pages/Login';
import Main from './pages/Main';
import { Search } from './pages/Search';
import { SignUp } from './pages/SignUp';

export function App() {
  return (
    <>
      {' '}
      <BrowserRouter>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

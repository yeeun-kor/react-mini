import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import MovieDetail from './components/MovieDetail';
import movieDatailData from './data/movieDetailData.json';
import './index.css';

const detail = movieDatailData;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<App></App>}></Route>
        <Route
          //Link로 이동오는 param값을 :id 라고 설정함.
          //즉, 현재 /details:id → /details123 이렇게 URL이 됨
          // 하지만 우리가 의도한 건 /details/123
          path="/details/:id"
          element={<MovieDetail></MovieDetail>}
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

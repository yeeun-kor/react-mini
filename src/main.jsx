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
          path="/details"
          element={<MovieDetail detail={detail}></MovieDetail>}
        ></Route>

      </Route>
    </Routes>
  </BrowserRouter>,
);

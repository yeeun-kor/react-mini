import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import MovieDetail from './components/MovieDetail';
import './index.css';
import { Search } from './Search';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<App></App>}></Route>
        <Route
          path="/details/:id"
          element={<MovieDetail></MovieDetail>}
        ></Route>
        <Route path="/search" element={<Search></Search>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

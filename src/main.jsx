import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import './index.css';
import Login from './pages/Login';
import { Search } from './pages/Search';
import { SignUp } from './pages/SignUp';
import { AuthProvider } from './supabase/authUser';
import { SupabaseProvider } from './supabase/client';
const MovieDetail = React.lazy(() => import('./components/MovieDetail'));

createRoot(document.getElementById('root')).render(
  <SupabaseProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route path="/" element={<App></App>}></Route>
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
    </AuthProvider>
  </SupabaseProvider>,
);

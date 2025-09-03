import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import movieListData from './data/movieListData.json';

function App() {
  //json 데이터 가져오기
  const [movies, setMovies] = useState(movieListData.results);
  console.log(movies);
  return (
    <>
      <h1 className="bg-indigo-300 p-3 text-center text-3xl">메인페이지</h1>
      <main className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </main>
    </>
  );
}

export default App;

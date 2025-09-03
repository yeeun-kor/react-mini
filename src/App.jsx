import './App.css';
import MovieDetail from './components/MovieDetail';
import movieDatailData from './data/movieDetailData.json';
import movieListData from './data/movieListData.json';

//상수
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const movies = movieListData.results;
const detail = movieDatailData;

export //TODOS data:RTK로 관리하기
function App() {
  //json 데이터 가져오기

  console.log(detail);
  return (
    <>
      <h1 className="bg-indigo-300 p-3 text-center text-3xl">메인페이지</h1>
      {/* <main className="m-auto grid max-w-[1080px] grid-cols-1 gap-4 px-5 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </main> */}
      <MovieDetail detail={detail}></MovieDetail>
    </>
  );
}

export default App;

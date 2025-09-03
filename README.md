# 1단계 미션지 : 메인 페이지 및 영화 상세 페이지 레이아웃 구성

> 📌 React와 CSS의 Flexbox 또는 Grid를 사용
>
> 영화 메인 페이지와 상세 페이지의 기본 레이아웃을 구성.
>
> - React-Router-Dom을 사용하여 라우팅을 구현합니다.
> - .gitignore를 사용하여 불필요한 파일이 Git에 업로드되지 않도록 합니다.
> - VSCode에 React 앱 생성 (**Vite**)

---

## 1. 더미데이터를 사용한 메인 페이지 (App.jsx) 레이아웃 구성

### **요구 사항:**

> ⭐ 이미지 baseUrl = "https://image.tmdb.org/t/p/w500"

- 주어진 더미데이터의 압축을 풀고 **`movieListData.json`**을 이용하여 메인 페이지 레이아웃을 구성하세요.
- **`MovieCard`** 컴포넌트를 생성하고 영화를 렌더링합니다.
- **`MovieCard`** 컴포넌트에 포스터와 제목, 평점 정보를 전달해야 합니다.

### 1-1. movieListData.json 상태 관리

먼저, **`App.jsx`** 파일에서 **`movieListData.json`** 데이터를 import하여 상태로 관리하여 `const movies `라는 이름으로 저장하였다.
그리고 data 값을 map 함수로 돌려서 `MovieCard` 데이터를 `props` 로 전달하였다.

> `import` 필수 !

```jsx
import movieListData from './data/movieListData.json';
const [movies, setMovies] = useState(movieListData.results);

{
  movies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>);
}
```

---

## 2. 더미데이터를 사용한 상세 페이지 (MovieDetail.jsx) 레이아웃 구성

### **구현 단계:**

1. **`MovieDetail`** 컴포넌트를 생성합니다.
2. **`movieDetailData.json`** 데이터를 import하여 **상태로 관리**합니다.
3. 상세 페이지 레이아웃에 필요한 요소를 JSX로 추가합니다.
4. Flexbox 또는 Grid를 사용하여 레이아웃을 구성합니다.

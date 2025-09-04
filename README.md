# 1단계

<br/>

## 1단계 미션지 : 메인 페이지 및 영화 상세 페이지 레이아웃 구성

📌 React와 CSS의 Flexbox 또는 Grid를 사용하여 영화 메인 페이지와 상세 페이지의 기본 레이아웃을 구성하고, React-Router-Dom을 사용하여 라우팅을 구현합니다. 또한, .gitignore를 사용하여 불필요한 파일이 Git에 업로드되지 않도록 합니다.

- VSCode에 React 앱 생성 (**Vite**)

<br/>

## **1. 더미데이터를 사용한 메인 페이지 (App.jsx) 레이아웃 구성**

### **요구 사항:**

> ⭐ 이미지 baseUrl = "https://image.tmdb.org/t/p/w500"

- 주어진 더미데이터의 압축을 풀고 **`movieListData.json`**을 이용하여 메인 페이지 레이아웃을 구성하세요.
- **`MovieCard`** 컴포넌트를 생성하고 영화를 렌더링합니다.
- **`MovieCard`** 컴포넌트에 포스터와 제목, 평점 정보를 전달해야 합니다.

<br/>
<br/>

## **2. 더미데이터를 사용한 상세 페이지 (MovieDetail.jsx) 레이아웃 구성**

### **요구 사항:**

- 주어진 더미데이터의 압축을 풀고 **`movieDetailData.json`**을 이용하여 상세 페이지 레이아웃을 구성하세요.

<br/>

### **상세 페이지에 포함될 요소**

- **backdrop_path**: 영화의 배경 이미지 경로 or **poster_path**: 영화 포스터 이미지 경로
- **title**: 제목
- **vote_average**: 평균 평점
- **genres**: 영화의 장르 배열
- **overview**: 영화의 줄거리

<details><summary> `movieDetailData.json`에는 아래와 같은 영화 정보가 들어 있습니다:
</summary>

- **backdrop_path**: 영화의 배경 이미지 경로

- **belongs_to_collection**: 컬렉션에 속한 경우 컬렉션 정보 (여기서는 **`null`**로 설정)

- **budget**: 영화의 제작 예산

- **genres**: 영화의 장르 배열

- **homepage**: 영화의 공식 홈페이지
- **id**: 영화의 고유 ID
- **imdb_id**: IMDb에서 영화의 고유 ID
- **original_language**: 원어
- **original_title**: 원제목
- **overview**: 영화의 줄거리
- **popularity**: 영화의 인기 지수
- **poster_path**: 영화 포스터 이미지 경로
- **production_companies**: 제작사 배열
- **release_date**: 개봉일
- **revenue**: 수익
- **runtime**: 상영 시간 (분)
- **spoken_languages**: 사용된 언어 배열
- **status**: 개봉 상태
- **tagline**: 태그라인
- **title**: 제목
- **video**: 비디오 여부
- **vote_average**: 평균 평점
- **vote_count**: 평점 수
</details>

<br/>
<br/>

## **3. React-Router-Dom을 사용하여 라우팅 구성**

### **요구 사항:**

- **`react-router-dom`**을 설치하고 설정합니다.
- 라우팅을 구성하여 다음 경로를 설정합니다:
  - **`/`** 경로: 메인 페이지 ( **App.jsx** )
  - **`/details`** 경로: 상세 페이지 ( **MovieDetail.jsx** )

<br/>
<br/>

## **4. Layout Component를 사용하여 Nav바 상단에 표시**

<br/>

### **요구 사항:**

- `Layout` 컴포넌트를 사용하여 앱의 모든 페이지 상단에 `NavBar`가 표시될 수 있도록 합니다.

<br/>
<br/>

## **🔥 도전 미션**

## **1. 슬라이드 구현하기 (Swiper 사용 또는 Swiper 없이 구현하기)**

### **요구 사항:**

- 영화 목록을 슬라이드 형식으로 보여주는 UI를 구현합니다.
- **`Swiper`** 라이브러리를 사용하거나, 직접 CSS와 JavaScript를 활용하여 슬라이드를 구현할 수 있습니다.

# 2단계

## **2단계 미션지 : TMdb API를 이용한 영화 웹 애플리케이션 확장**

> 📌 [TMdb](https://www.themoviedb.org/) API를 사용하여 동적으로 데이터를 가져오고,
> 클릭한 영화 정보에 맞는 영화 상세페이지로 이동하도록 라우팅을 구현합니다.

### **준비물**

- [TMdb API 읽기 액세스 토큰 발급](https://www.themoviedb.org/settings/api)
- [TMbd API docs](https://developer.themoviedb.org/reference/intro/getting-started)

<br/>
<br/>

## **1. TMdb DB와 프로젝트를 연결 (**API 읽기 액세스 토큰**)**

### **요구 사항**

- **TMdb API 읽기 액세스 토큰**를 발급받고 프로젝트 루트 디렉토리에 **`.env`** 파일을 생성하여 저장합니다.
- **`.env`** 파일을 **`.gitignore`** 파일에 추가하여 **`.env`** 파일이 github에 업로드 되지 않도록 설정합니다.
- 환경변수로 **API 읽기 액세스 토큰**를 이용할 수 있도록 설정합니다.

<br/>
<br/>

## **2. API 호출해서 더미데이터를 응답 데이터로 변경**

### **요구 사항**

- TMdb API를 사용하여 영화 응답 데이터를 기반으로 메인 페이지를 구성합니다.
- 영화 데이터를 메인 페이지에 표시할 때, **`adult`** 값이 **`false`**인 영화만 필터링하여 제공합니다.
  - 이를 통해 성인 콘텐츠를 제외하고, 사용자에게 안전한 영화 데이터를 노출할 수 있습니다.

<br/><br/>

## **3. 클릭한 MovieCard에 맞는 MovieDetail로 이동하도록 라우팅**

### **요구 사항**

- 각 **`MovieCard`**를 클릭하면 해당 영화의 상세 정보를 보여주는 **`MovieDetail`** 페이지로 이동하도록 **동적 라우팅**을 활용하여 **라우팅을** 설정합니다.

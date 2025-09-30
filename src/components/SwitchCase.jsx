//- 조건에 따른 UI컴포넌트 받기
/*
- condition : 로딩중인지 아닌지 분기조건(true,false)
- fallback : 조건이 true -> 보여줄 컴포넌트 (스켈레톤)
- children : 기본적으로 보여줄 컴포넌트
*/
export default function SwitchCase({ condition, fallback, children }) {
  if (condition) {
    return fallback;
  }
  return children;
}

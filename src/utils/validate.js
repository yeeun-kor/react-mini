export const validateEmailFn = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return '이메일을 입력해주세요.';
  if (!regex.test(email)) return '올바른 이메일 형식으로 입력하세요.';
  return '';
};

export const validatePasswordFn = (password) => {
  if (!password) return '비밀번호를 입력해주세요.';
  if (password.length < 8) return '비밀번호는 8자 이상 입력해야 합니다.';
  return '';
};
export const validateNameFn = (name) => {
  const regex = /^[a-zA-Z0-9가-힣]{2,8}$/;
  if (!name) return '이름을 입력해주세요.';
  if (!regex.test(name)) return '이름은 2~8자 한글,영어,숫자만 가능합니다.';
  return '';
};

export const validatePasswordConfirmFn = (password, passwordConfirm) => {
  if (!passwordConfirm) return '비밀번호 확인을 입력해주세요.';
  if (password !== passwordConfirm) return '비밀번호가 일치하지 않습니다.';
  return '';
};

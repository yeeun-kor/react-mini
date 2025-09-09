import { createContext, useContext, useState } from 'react';

// 로그인 유저 세팅
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    new Error('auth가 초기화 되지 않았습니다.');
    return;
  }
  return auth;
};

// NavBar에서 const { user } = useAuth();로 로그인 여부를 바로 확인 가능

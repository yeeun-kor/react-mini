import { createContext, useContext, useEffect, useState } from 'react';
import { useSupabase } from './client';

// 로그인 유저 세팅
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const supabase = useSupabase();
  const [user, setUser] = useState(null);

  //! 현재 세션 가져오기
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setUser(session.user);
    });
  }, [supabase]);
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

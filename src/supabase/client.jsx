import { createClient } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

// supabase 로그인 유지 세션 생성
export const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_PROJECT_URL, // Supabase Project URL
  import.meta.env.VITE_SUPABASE_API_KEY, // Supabase API Key
);

// supabase client 데이터베이스 연동
const SUPABASE = createContext(null);
export const SupabaseProvider = ({ children }) => {
  return (
    <SUPABASE.Provider value={supabaseClient}>{children}</SUPABASE.Provider>
  );
};
export const useSupabase = () => {
  const supabase = useContext(SUPABASE);

  if (!supabase) {
    new Error('supabase가 초기화 되지 않았습니다.');
    return;
  }
  return supabase;
};

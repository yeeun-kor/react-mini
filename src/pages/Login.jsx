import logo from '@/assets/logo.png';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import { useAuth } from '@/supabase/authUser';
import { useSupabase } from '@/supabase/client';
import { validateEmailFn, validatePasswordFn } from '@/utils/validate';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
  const naviagate = useNavigate();
  //로그인 유효성 검사
  const [validateEmail, setValidateEmail] = useState('');
  const [validatePassword, setValidatePassword] = useState('');

  //실제 입력값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //백앤드 데이터 연동
  const supabase = useSupabase();
  const { setUser } = useAuth();

  //로그인 클릭하여 연동하는 이벤트 처리
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log(data);
      alert('로그인이 완료되었습니다. ');
      if (data.user) setUser(data.user);
      naviagate('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="OZ무비"
            src={logo}
            className="mx-auto h-30 w-auto dark:hidden"
          />
          <img
            alt="OZ무비"
            src={logo}
            className="mx-auto h-30 w-auto not-dark:hidden"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <InputField
                labelText={'이메일'}
                inputType={'email'}
                name={'email'}
                id={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setValidateEmail(validateEmailFn(email))}
                error={validateEmail}
              ></InputField>
            </div>
            <div>
              <InputField
                labelText={'비밀번호'}
                inputType={'password'}
                name={'password'}
                id={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setValidatePassword(validatePasswordFn(password))}
                error={validatePassword}
              ></InputField>
            </div>
            <Button text={'로그인'}></Button>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
            OZ무비가 처음이신가요?{' '}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              간편 가입
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

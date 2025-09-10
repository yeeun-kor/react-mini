import InputField from '@/components/InputField';
import { useSupabase } from '@/supabase/client';
import {
  validateEmailFn,
  validateNameFn,
  validatePasswordConfirmFn,
  validatePasswordFn,
} from '@/utils/validate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const naviagate = useNavigate();
  // 회원가입 유효성 검사
  const [validateName, setValidateName] = useState(''); //이름
  const [validateEmail, setValidateEmail] = useState(''); //이메일
  const [validatePassword, setValidatePassword] = useState(''); //비밀번호
  const [validatePasswordConfirm, setValidatePasswordConfirm] = useState(''); //비밀번호확인

  //실제 입력값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');

  //회원가입 버튼 클릭 이벤트 처리
  const supabase = useSupabase();

  async function handlerSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: name,
          },
        },
      });
      alert('회원가입이 완료되었습니다. ');
      naviagate('/login');
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <form
      className="m-auto max-w-[960px] px-5 py-10"
      onSubmit={handlerSubmit}
      method="POST"
    >
      <div className="border-b border-gray-900/10 pb-12 dark:border-white/10">
        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
          회원가입
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
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

          <div className="sm:col-span-4">
            <InputField
              labelText={'이름'}
              inputType={'text'}
              name={'name'}
              id={'name'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setValidateName(validateNameFn(name))}
              error={validateName}
            ></InputField>
          </div>
          <div className="sm:col-span-2">
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

          <div className="sm:col-span-2">
            <InputField
              labelText={'비밀번호 확인'}
              inputType={'password'}
              name={'passwordConfirm'}
              id={'passwordConfirm'}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              onBlur={() =>
                setValidatePasswordConfirm(
                  validatePasswordConfirmFn(password, passwordConfirm),
                )
              }
              error={validatePasswordConfirm}
            ></InputField>
          </div>
        </div>
      </div>

      {/* button */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        {/* 입력 초기화 */}
        <button
          type="button"
          onClick={() => (
            setEmail(''),
            setValidateEmail(''),
            setName(''),
            setValidateName(''),
            setPassword(''),
            setValidatePassword(''),
            setPasswordConfirm(''),
            setValidatePasswordConfirm('')
          )}
          className="text-sm/6 font-semibold text-gray-900 dark:text-white"
        >
          취소
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500"
        >
          회원가입
        </button>
      </div>
    </form>
  );
};

export default function InputField({
  labelText,
  inputType,
  error,
  name,
  id,
  value,
  onChange,
  onBlur,
}) {
  //공통 컴포넌트는 빼서 propsfh 값 전달 받기
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
      >
        {labelText}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          required
          onBlur={onBlur}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
        {/* 에러메시지  */}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    </>
  );
}

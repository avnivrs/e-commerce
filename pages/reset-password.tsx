import Link from 'next/link';
import { useRef, useState } from 'react';

import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { addClass, removeClass, showAlert, togglePassword } from '@/public/utils';

const ResetPassword = () => {
  const [emailReset, setEmailReset] = useState(false);

  const passwordref = useRef<HTMLInputElement>(null);
  const confirmPasswordref = useRef<HTMLInputElement>(null);

  const moveLabelUp = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputTag: HTMLInputElement = e.target;
    const spanTag = e.target.previousElementSibling as HTMLSpanElement;

    removeClass(spanTag, 'phones:top-[40%]');
    addClass(spanTag, 'phones:-top-[10%]', 'phones:bg-white');

    removeClass(inputTag, 'bg-concrete', 'phones:border-transparent');
    addClass(inputTag, 'phones:bg-white', 'phones:border-[rgba(0,0,0,0.5)]');
  };

  const moveLabelDown = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputTag: HTMLInputElement = e.target;
    const spanTag = e.target.previousElementSibling as HTMLSpanElement;

    if (inputTag.value.length > 0) return;

    addClass(spanTag, 'phones:top-[40%]');
    removeClass(spanTag, 'phones:-top-[10%]', 'phones:bg-white');

    addClass(inputTag, 'bg-concrete', 'phones:border-transparent');
    removeClass(inputTag, 'phones:bg-white', 'phones:border-[rgba(0,0,0,0.5)]');
  };

  const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // these are the user's input
    const { password, confirmPassword } = Object.fromEntries(formData.entries());
    if (password !== confirmPassword) return showAlert({ msg: 'Passwords do not match!' });

    // API and backend call to proceed to reset password
    showAlert({ msg: 'Password reset successfully' });
    setEmailReset(true);
  };

  return (
    <MainLayout>
      <FormAside />

      {emailReset ? (
        <aside className='relative overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[70px] pb-[30px] px-[92px] laptops:w-full laptops:max-w-[90vw] phones:max-w-[100vw] phones:rounded-none phones:h-screen phones:px-5 phones:pt-[156px]'>
          <h1 className='font-medium text-[16px] leading-8 mt-[70px] phones:font-semibold phones:text-[20px] phones:leading-6 phones:tracking-wider'>
            Reset Done
          </h1>

          <p className='mt-5 font-medium text-[14px] leading-7 text-[rgba(0,0,0,0.5)] phones:mt-3'>
            Click “Return to login” to get back into your account. Let&apos;s get shopping again!
          </p>

          <Link
            href='/sign-in'
            className='mt-10 block text-center w-full bg-dove-gray py-[15px] text-white rounded-[30px] font-semibold text-[14px] leading-[17px] disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500 phones:mt-[50px]'
          >
            Return to login
          </Link>

          <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2 phones:static phones:translate-x-0 phones:mt-[184px]' />
        </aside>
      ) : (
        <aside className='relative overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[79px] pb-[30px] px-[70px] laptops:px-[187px] laptops:w-full laptops:max-w-[90vw] phones:max-w-[100vw] phones:rounded-none phones:h-screen phones:px-5 phones:pt-[156px]'>
          <header className='max-w-[496px] font-semibold text-[26px] leading-8 text-black phones:text-[20px] phones:leading-6 phones:tracking-wider'>
            Reset your password
          </header>

          <form
            onSubmit={resetPassword}
            className='mt-[74px] font-normal flex flex-col gap-y-7 phones:mt-[30px] phones:gap-y-5'
          >
            <label htmlFor='password' className='block relative text-[12px] leading-[15px]'>
              <span className='ml-5 text-[rgba(0,0,0,0.5)] phones:px-2 phones:absolute phones:top-[40%] phones:text-gray-light-1 transition-all duration-300'>
                Password
              </span>
              <input
                required
                id='password'
                name='password'
                type='password'
                ref={passwordref}
                spellCheck='false'
                autoComplete='off'
                onFocus={moveLabelUp}
                onBlur={moveLabelDown}
                placeholder='Enter password'
                className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] phones:py-[16.5px] phones:border-2 phones:border-transparent phones:placeholder:opacity-0 phones:outline-none phones:focus:border-[rgba(0,0,0,0.5)] phones:focus:bg-white phones:font-medium transition-all duration-300 phones:mt-0 phones:rounded-[25px]'
              />
              <div
                onClick={() => togglePassword(passwordref)}
                className='cursor-pointer w-[18px] h-[18px] bg-[url(/assets/svgs/eye.svg)] bg-no-repeat bg-center absolute right-[22px] top-[55%] phones:top-[calc(55%-10px)]'
              />
            </label>

            <label htmlFor='confirmPassword' className='block relative text-[12px] leading-[15px]'>
              <span className='ml-5 text-[rgba(0,0,0,0.5)] phones:px-2 phones:absolute phones:top-[40%] phones:text-gray-light-1 transition-all duration-300'>
                Confirm password
              </span>
              <input
                required
                type='password'
                spellCheck='false'
                autoComplete='off'
                id='confirmPassword'
                onFocus={moveLabelUp}
                onBlur={moveLabelDown}
                name='confirmPassword'
                ref={confirmPasswordref}
                placeholder='Re-enter password'
                className='mt-[10px] p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] phones:py-[16.5px] phones:border-2 phones:border-transparent phones:placeholder:opacity-0 phones:outline-none phones:focus:border-[rgba(0,0,0,0.5)] phones:focus:bg-white phones:font-medium transition-all duration-300 phones:mt-0 phones:rounded-[25px]'
              />
              <div
                onClick={() => togglePassword(confirmPasswordref)}
                className='cursor-pointer w-[18px] h-[18px] bg-[url(/assets/svgs/eye.svg)] bg-no-repeat bg-center absolute right-[22px] top-[55%] phones:top-[calc(55%-10px)]'
              />
            </label>

            <input
              type='submit'
              value='Reset'
              className='cursor-pointer mt-[2px] bg-dove-gray py-[15px] w-full text-white rounded-[30px] font-semibold text-[14px] leading-[17px] disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500 phones:mt-5'
            />
          </form>

          <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2 laptops:static laptops:translate-x-0 phones:mt-[184px]' />
        </aside>
      )}
    </MainLayout>
  );
};

export default ResetPassword;

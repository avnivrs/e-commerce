import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

import Eye from '@/components/Eye';
import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { addClass, removeClass } from '@/public/utils';

const SignIn = () => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const moveLabelUp = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputTag: HTMLInputElement = e.target;
    const spanTag = e.target.previousElementSibling as HTMLSpanElement;

    removeClass(spanTag, 'phones:top-[50%]');
    addClass(spanTag, 'phones:top-[5%]', 'phones:bg-white');

    removeClass(inputTag, 'phones:bg-concrete', 'phones:border-transparent');
    addClass(inputTag, 'phones:bg-white', 'phones:border-dove-gray');
  };

  const moveLabelDown = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputTag: HTMLInputElement = e.target;
    const spanTag = e.target.previousElementSibling as HTMLSpanElement;

    if (inputTag.value.length > 0) return;

    addClass(spanTag, 'phones:top-[50%]');
    removeClass(spanTag, 'phones:top-[5%]', 'phones:bg-white');

    addClass(inputTag, 'phones:bg-concrete', 'phones:border-transparent');
    removeClass(inputTag, 'phones:bg-white', 'phones:border-dove-gray');
  };

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // these are the user's input
    const { email, password } = Object.fromEntries(formData.entries());
    console.log(email, password);

    // API and backend call to sign in
  };

  return (
    <MainLayout>
      <FormAside />

      <aside className='auth-scroll overflow-y-auto w-[690px] max-h-[690px] bg-white border border-[rgba(102,102,102,0.5)] rounded-3xl pt-[79px] pb-[30px] px-[70px] laptops:px-[187px] laptops:w-full laptops:max-w-[90vw] phones:max-w-[100vw] phones:rounded-none phones:h-screen phones:px-5 phones:pt-[100px]'>
        <header className='grid grid-cols-[minmax(0,1fr)_57px] grid-rows-2 gap-y-5 phones:gap-y-3 phones:grid-cols-1 phones:px-[10.5px]'>
          <p className='font-semibold text-[26px] leading-8 text-black phones:text-[20px] phones:leading-6 phones:tracking-wider'>
            Welcome Back!
          </p>
          <button className='w-[57px] h-[57px] bg-[url(/assets/svgs/google.svg)] bg-center bg-no-repeat rounded-[30px] border border-[rgba(102,102,102,0.35)] row-start-1 row-end-3 col-start-2 self-center ml-auto phones:hidden transition-all duration-500 hover:bg-[rgba(102,102,102,0.05)]' />
          <p className='font-normal text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)] phones:font-medium phones:leading-7'>
            Let&apos;s sign you in to get back to where you stopped
          </p>
        </header>

        <form onSubmit={signIn} className='mt-[50px] text-black font-normal'>
          <label htmlFor='email' className='block w-full relative'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)] phones:px-1 phones:absolute phones:top-[50%] phones:text-[12px] phones:leading-[15px] phones:text-gray-light-1 transition-all duration-300'>
              Email
            </span>
            <input
              required
              id='email'
              name='email'
              type='email'
              spellCheck='false'
              autoComplete='off'
              onFocus={moveLabelUp}
              onBlur={moveLabelDown}
              placeholder='Enter the required email address'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] border-2 border-transparent focus:border-dove-gray phones:border-transparent phones:pl-[22px] phones:placeholder:opacity-0 outline-none phones:font-medium transition-all duration-300'
            />
          </label>

          <label htmlFor='password' className='block mt-6 relative phones:mt-5'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)] phones:px-1 phones:absolute phones:top-[50%] phones:text-[12px] phones:leading-[15px] phones:text-gray-light-1 transition-all duration-300'>
              Password
            </span>
            <input
              required
              id='password'
              name='password'
              type='password'
              ref={passwordRef}
              spellCheck='false'
              autoComplete='off'
              onFocus={moveLabelUp}
              onBlur={moveLabelDown}
              placeholder='Enter the required password'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] border-2 border-transparent focus:border-dove-gray phones:border-transparent phones:pl-[22px] phones:placeholder:opacity-0 outline-none phones:font-medium transition-all duration-300'
            />
            <Eye passwordRef={passwordRef} extraClassnames='top-[60%] phones:top-[calc(60%-8px)]' />
          </label>

          <div className='mt-3 flex items-center px-5 justify-between text-[rgba(0,0,0,0.5)] text-[12px] leading-[15px] phones:mt-[10px]'>
            <label htmlFor='remember' className='flex items-center gap-x-[10px] cursor-pointer'>
              <input type='radio' id='remember' className='accent-gray' />
              Remember me
            </label>

            <Link href='/forgot-password'>Forgot password?</Link>
          </div>

          <input
            type='submit'
            value='Sign In'
            className='cursor-pointer py-5 w-full mt-[42px] bg-dove-gray rounded-[30px] text-white font-semibold text-[14px] leading-[17px] phones:mt-10'
          />
        </form>

        <button className='hidden w-full mt-5 border border-silver rounded-[30px] py-[19px] items-center justify-center gap-x-[10px] font-semibold text-[14px] leading-[17px] text-gray-light-1 phones:flex'>
          <Image src='/assets/svgs/google.svg' width={17} height={17} priority alt='' />
          Google
        </button>

        <p className='mt-5 text-center text-[rgba(0,0,0,0.5)] text-[12px] leading-7 phones:leading-[22px]'>
          Don&apos;t have an account yet? <br className='hidden phones:block' />
          <Link href='/sign-up' className='font-semibold'>
            Create an account now!
          </Link>
        </p>

        <FormFooter />
      </aside>
    </MainLayout>
  );
};

export default SignIn;

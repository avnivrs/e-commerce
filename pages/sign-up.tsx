import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { addClass, removeClass, showAlert, togglePassword } from '@/public/utils';

const SignUp = () => {
  const router = useRouter();

  const passwordref = useRef<HTMLInputElement>(null);
  const confirmPasswordref = useRef<HTMLInputElement>(null);

  const TERMS_OF_USE_URL = '/';
  const PRIVACY_POLICY_URL = '/';

  const moveLabelUp = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputTag: HTMLInputElement = e.target;
    const spanTag = e.target.previousElementSibling as HTMLSpanElement;

    removeClass(spanTag, 'phones:top-[40%]');
    addClass(spanTag, 'phones:-top-[10%]', 'bg-white');

    removeClass(inputTag, 'bg-concrete', 'border-transparent');
    addClass(inputTag, 'bg-white', 'border-dove-gray');
  };

  const moveLabelDown = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputTag: HTMLInputElement = e.target;
    const spanTag = e.target.previousElementSibling as HTMLSpanElement;

    if (inputTag.value.length > 0) return;

    addClass(spanTag, 'phones:top-[40%]');
    removeClass(spanTag, 'phones:-top-[10%]', 'bg-white');

    addClass(inputTag, 'bg-concrete', 'border-transparent');
    removeClass(inputTag, 'bg-white', 'border-dove-gray');
  };

  const signUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // these are the user's input
    const { name, email, password, confirmPassword } = Object.fromEntries(formData.entries());

    if (password !== confirmPassword) return showAlert({ msg: 'Passwords do not match!' });
    Cookies.set('rhobuy-email', email as string);

    // API and backend call to sign up
    router.push('/verify');
  };

  return (
    <MainLayout>
      <FormAside />

      <aside className='overflow-y-auto w-[690px] bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[79px] pb-[30px] px-[70px] laptops:px-[187px] laptops:w-full laptops:max-w-[90vw] phones:max-w-[100vw] phones:rounded-none phones:h-screen phones:px-5 phones:pt-[100px]'>
        <header className='grid grid-cols-[minmax(0,1fr)_57px] grid-rows-2 gap-y-5 phones:gap-y-3 phones:grid-cols-1 phones:px-[10.5px]'>
          <p className='font-semibold text-[26px] leading-8 text-black phones:text-[20px] phones:leading-6 phones:tracking-wider'>
            Create an account
          </p>
          <button className='w-[57px] h-[57px] bg-[url(/assets/svgs/google.svg)] bg-center bg-no-repeat rounded-[30px] border-[1px] border-[rgba(102,102,102,0.35)] row-start-1 row-end-3 col-start-2 self-center ml-auto phones:hidden transition-all duration-500 hover:bg-[rgba(102,102,102,0.05)]' />
          <p className='font-normal text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)] phones:font-medium phones:leading-7'>
            Let&apos;s sign you up to begin your journey in
            <span className='font-semibold'> Avniverse</span>
          </p>
        </header>

        <form
          onSubmit={signUp}
          className='mt-[59px] text-black font-normal grid grid-cols-2 gap-y-6 gap-x-[30px] phones:mt-[50px] phones:gap-y-5 phones:grid-cols-1'
        >
          <label htmlFor='name' className='block relative'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)] phones:px-2 phones:absolute phones:top-[40%] phones:text-[12px] phones:leading-[15px] phones:text-gray-light-1 transition-all duration-300'>
              Name
            </span>
            <input
              required
              id='name'
              name='name'
              type='text'
              spellCheck='false'
              autoComplete='off'
              onFocus={moveLabelUp}
              onBlur={moveLabelDown}
              placeholder='Enter your name'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] border-2 border-transparent phones:placeholder:opacity-0 outline-none phones:font-medium transition-all duration-300 phones:mt-0'
            />
          </label>

          <label htmlFor='email' className='block relative'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)] phones:px-2 phones:absolute phones:top-[40%] phones:text-[12px] phones:leading-[15px] phones:text-gray-light-1 transition-all duration-300'>
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
              placeholder='Enter your email address'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] border-2 border-transparent phones:placeholder:opacity-0 outline-none phones:font-medium transition-all duration-300 phones:mt-0'
            />
          </label>

          <label htmlFor='password' className='block relative'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)] phones:px-2 phones:absolute phones:top-[40%] phones:text-[12px] phones:leading-[15px] phones:text-gray-light-1 transition-all duration-300'>
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
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] border-2 border-transparent phones:placeholder:opacity-0 outline-none phones:font-medium transition-all duration-300 phones:mt-0'
            />
            <div
              onClick={() => togglePassword(passwordref)}
              className='cursor-pointer w-[18px] h-[18px] bg-[url(/assets/svgs/eye.svg)] bg-no-repeat bg-center absolute right-[22px] top-[60%] phones:top-[calc(60%-14px)]'
            />
          </label>

          <label htmlFor='confirmPassword' className='block relative'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)] phones:px-2 phones:absolute phones:top-[40%] phones:text-[12px] phones:leading-[15px] phones:text-gray-light-1 transition-all duration-300'>
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
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] border-2 border-transparent phones:placeholder:opacity-0 outline-none phones:font-medium transition-all duration-300 phones:mt-0'
            />
            <div
              onClick={() => togglePassword(confirmPasswordref)}
              className='cursor-pointer w-[18px] h-[18px] bg-[url(/assets/svgs/eye.svg)] bg-no-repeat bg-center absolute right-[22px] top-[60%] phones:top-[calc(60%-14px)]'
            />
          </label>

          <p className='text-[12px] leading-[15px] ml-5 text-[rgba(0,0,0,0.5)] col-start-1 col-end-3 phones:-mt-[10px] phones:col-end-auto'>
            By creating an account, you agree to our{' '}
            <Link href={TERMS_OF_USE_URL} className='font-semibold'>
              Terms of use
            </Link>{' '}
            and{' '}
            <Link href={PRIVACY_POLICY_URL} className='font-semibold'>
              Privacy Policy
            </Link>
          </p>

          <input
            type='submit'
            value='Sign up'
            className='cursor-pointer col-start-1 col-end-3 py-5 w-full bg-dove-gray rounded-[30px] text-white font-semibold text-[14px] leading-[17px] phones:mt-5 phones:col-end-auto'
          />
        </form>

        <button className='hidden w-full mt-5 border-[1px] border-silver rounded-[30px] py-[19px] items-center justify-center gap-x-[10px] font-semibold text-[14px] leading-[17px] text-gray-light-1 phones:flex'>
          <Image src='/assets/svgs/google.svg' width={17} height={17} priority alt='' />
          Google
        </button>

        <p className='mt-5 text-center text-[rgba(0,0,0,0.5)] text-[12px] leading-7 phones:leading-[22px]'>
          Already have an account? <br className='hidden phones:block' />
          <Link href='/sign-in' className='font-semibold'>
            Sign in
          </Link>
        </p>

        <FormFooter />
      </aside>
    </MainLayout>
  );
};

export default SignUp;

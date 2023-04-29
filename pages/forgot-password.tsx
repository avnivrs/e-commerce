import Link from 'next/link';
import { useEffect, useState } from 'react';

import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { addClass, removeClass, showAlert } from '@/public/utils';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [timer, setTimer] = useState(2 * 60); // 2 minutes

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

  useEffect(() => {
    if (timer > 0 && emailSent) {
      const timeout = setTimeout(() => setTimer(value => value - 1), 1000);
      return () => clearTimeout(timeout);
    }
  }, [timer, emailSent]);

  const resend = () => {
    // logic for resending goes here

    // after resending...
    showAlert({ msg: 'Email sent' });
    setTimer(2 * 60);
  };

  const proceed = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // API and backend call to proceed to send reset password link
    setEmailSent(true);
  };

  return (
    <MainLayout>
      <FormAside />

      {emailSent ? (
        <aside className='relative font-medium text-[14px] leading-[17px] overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[70px] pb-[30px] px-[92px] laptops:px-[210px] laptops:w-full laptops:max-w-[90vw] phones:max-w-[100vw] phones:rounded-none phones:h-screen phones:px-5 phones:pt-[156px]'>
          <p className='text-right phones:hidden'>
            {Math.floor(timer / 60)} min : {(timer % 60).toString().padStart(2, '0')} sec
          </p>

          <header className='mt-[63px] phones:px-[5px]'>
            <h1 className='text-[16px] leading-8 phones:font-semibold phones:text-[20px] phones:leading-6 phones:tracking-wider'>
              Email sent!
            </h1>

            <p className='mt-5 leading-7 text-[rgba(0,0,0,0.5)] phones:mt-3 phones:leading-7'>
              We sent an email with a reset link to{' '}
              <span className='font-semibold text-black'>{email}</span>. If you didn&apos;t receive
              the email, check your spam folder or tap the resend button.
            </p>
          </header>

          <p className='hidden text-center mt-[50px] phones:block'>
            {Math.floor(timer / 60)} min : {(timer % 60).toString().padStart(2, '0')} sec
          </p>

          <button
            onClick={resend}
            disabled={timer > 0}
            className='mt-10 bg-dove-gray py-[15px] w-full text-white rounded-[30px] font-semibold disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500 phones:mt-5'
          >
            Resend
          </button>

          <Link
            href='/sign-in'
            className='font-normal text-[12px] block leading-7 mt-5 text-center text-[rgba(0,0,0,0.5)] w-max mx-auto phones:font-medium phones:leading-[15px]'
          >
            Return to login
          </Link>

          <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2 laptops:static laptops:translate-x-0 phones:mt-[184px]' />
        </aside>
      ) : (
        <aside className='relative overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[79px] pb-[30px] px-[70px] laptops:px-[187px] laptops:w-full laptops:max-w-[90vw] phones:max-w-[100vw] phones:rounded-none phones:h-screen phones:px-5 phones:pt-[156px]'>
          <header className='max-w-[496px] phones:px-[10.5px]'>
            <p className='font-semibold text-[26px] leading-8 text-black phones:text-[20px] phones:leading-6 phones:tracking-wider'>
              Forgot Password?
            </p>
            <p className='font-normal text-[14px] leading-[26px] text-[rgba(0,0,0,0.5)] mt-5 phones:font-medium phones:leading-7 phones:mt-3'>
              Enter the email address associated with your account and we&apos;ll send you a link to
              reset your password.
            </p>
          </header>

          <form onSubmit={proceed} className='mt-[50px] font-normal'>
            <label htmlFor='email' className='block w-full relative'>
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
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter the required email address'
                className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)] phones:py-4 phones:border-2 phones:border-transparent phones:placeholder:opacity-0 phones:outline-none phones:focus:border-[rgba(0,0,0,0.5)] phones:focus:bg-white phones:font-medium transition-all duration-300 phones:mt-0 phones:rounded-[25px]'
              />
            </label>

            <input
              type='submit'
              value='Proceed'
              className='cursor-pointer mt-[30px] bg-dove-gray py-[15px] w-full text-white rounded-[30px] font-semibold text-[14px] leading-[17px] disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500'
            />
          </form>

          <Link
            href='/sign-in'
            className='font-normal text-[12px] block leading-7 mt-5 text-center text-[rgba(0,0,0,0.5)] w-max mx-auto phones:font-medium phones:leading-[15px]'
          >
            Return to sign in
          </Link>

          <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2 laptops:static laptops:translate-x-0 phones:mt-[184px]' />
        </aside>
      )}
    </MainLayout>
  );
};

export default ForgotPassword;

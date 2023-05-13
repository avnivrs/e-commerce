import CategoryIconLayout from '../layouts/CategoryIconLayout';

const Clothing = () => {
  return (
    <CategoryIconLayout>
      <svg
        width='48'
        height='49'
        fill='none'
        viewBox='0 0 48 49'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          stroke='white'
          fill='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M32.5714 12.4063L37.7143 17.5492L44.5714 10.692L36 2.12061H12L3.42859 10.692L10.2857 17.5492L15.4286 12.4063V24.4063C15.4286 29.0349 9.8743 32.292 8.77716 42.9206C8.72811 43.3961 8.77902 43.8766 8.92663 44.3312C9.07424 44.7859 9.31529 45.2046 9.6343 45.5606C9.95485 45.9158 10.3462 46.1999 10.7832 46.3948C11.2201 46.5896 11.693 46.6909 12.1714 46.692H35.8286C36.307 46.6909 36.7799 46.5896 37.2169 46.3948C37.6538 46.1999 38.0452 45.9158 38.3657 45.5606C38.6847 45.2046 38.9258 44.7859 39.0734 44.3312C39.221 43.8766 39.2719 43.3961 39.2229 42.9206C38.1257 32.292 32.5714 29.0349 32.5714 24.4063V12.4063Z'
        />
        <path
          fill='currentColor'
          d='M15.4286 21.835C18.1431 22.9722 21.0569 23.5579 24 23.5579C26.9432 23.5579 29.8569 22.9722 32.5714 21.835'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-white dark:stroke-shark'
          d='M15.4286 21.835C18.1431 22.9722 21.0569 23.5579 24 23.5579C26.9432 23.5579 29.8569 22.9722 32.5714 21.835'
        />
      </svg>
    </CategoryIconLayout>
  );
};

export default Clothing;

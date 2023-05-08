const User = () => {
  return (
    <div className='w-8 h-8 bg-[rgba(35,43,43,0.05)] rounded-full p-[9px] cursor-pointer dark:bg-shark dark:text-white dark:border-2 dark:p-[7px]'>
      <svg
        width='14'
        height='14'
        fill='none'
        viewBox='0 0 14 14'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeWidth='1.5'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M7.00001 7.00008C8.61084 7.00008 9.91668 5.69425 9.91668 4.08342C9.91668 2.47258 8.61084 1.16675 7.00001 1.16675C5.38918 1.16675 4.08334 2.47258 4.08334 4.08342C4.08334 5.69425 5.38918 7.00008 7.00001 7.00008Z'
        />
        <path
          strokeWidth='1.5'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12.0108 12.8333C12.0108 10.5758 9.765 8.75 7 8.75C4.235 8.75 1.98917 10.5758 1.98917 12.8333'
        />
      </svg>
    </div>
  );
};

export default User;
